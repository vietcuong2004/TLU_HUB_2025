"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { UserDropdown } from "@/components/user-dropdown"

export function AuthButtons() {
  const { user } = useAuth()

  if (user) {
    return <UserDropdown user={user} />
  }

  return (
    <Button variant="ghost" className="shadow-sm bg-teal-200" asChild>
      <Link href="/login">Đăng Nhập</Link>
    </Button>
  )
}