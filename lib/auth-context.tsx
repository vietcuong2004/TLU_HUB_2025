"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { api } from "./api"

interface User {
  email: string
  name: string
  image: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const DEMO_USER = {
  email: "user1@e.tlu.edu.vn",
  password: "123",
  name: "User1",
  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=user1",
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("tlu-hub-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Try server login first
      const res: any = await api.login(email, password)
      // Expecting { user: { email,name,image }, token } or similar
      if (res) {
        const userData: User = {
          email: res.user?.email ?? email,
          name: res.user?.name ?? res.name ?? email,
          image: res.user?.image ?? res.image ?? DEMO_USER.image,
        }
        setUser(userData)
        localStorage.setItem("tlu-hub-user", JSON.stringify(userData))
        if (res.token) {
          localStorage.setItem("tlu-hub-token", res.token)
        }
        setIsLoading(false)
        return true
      }
    } catch (err) {
      // If API fails (dev mode or server unreachable), fallback to demo credentials for local development
      // This keeps existing demo flow intact while wiring in real API usage when available.
      // Only allow fallback if credentials match demo user.
      // eslint-disable-next-line no-console
      console.warn("API login failed, falling back to demo check.", err)
      if (email === DEMO_USER.email && password === DEMO_USER.password) {
        const userData = {
          email: DEMO_USER.email,
          name: DEMO_USER.name,
          image: DEMO_USER.image,
        }
        setUser(userData)
        localStorage.setItem("tlu-hub-user", JSON.stringify(userData))
        setIsLoading(false)
        return true
      }
    }
    setIsLoading(false)
    return false
  }

  const logout = () => {
    // Attempt to call server logout - ignore errors
    try {
      void api.logout()
    } catch {}
    setUser(null)
    localStorage.removeItem("tlu-hub-user")
    localStorage.removeItem("tlu-hub-token")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
