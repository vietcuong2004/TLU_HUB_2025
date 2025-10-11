"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-white">TLU</span>
              </div>
              <span className="text-xl font-bold text-foreground">TLU HUB</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary pb-1",
                isActive("/") && pathname === "/"
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                  : "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform",
              )}
            >
              Trang Chủ
            </Link>
            <Link
              href="/courses"
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary pb-1",
                isActive("/courses")
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                  : "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform",
              )}
            >
              Khóa Học
            </Link>
            <Link
              href="/blog"
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary pb-1",
                isActive("/blog")
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                  : "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform",
              )}
            >
              Blog
            </Link>
            <Link
              href="/resources"
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary pb-1",
                isActive("/resources")
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                  : "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform",
              )}
            >
              Tài Liệu
            </Link>
            <Link
              href="/contact"
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary pb-1",
                isActive("/contact")
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                  : "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform",
              )}
            >
              Liên Hệ
            </Link>
          </nav>

          {/* Search & Auth */}
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Tìm kiếm..." className="w-64 pl-9" />
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" asChild>
                <Link href="/login">Đăng Nhập</Link>
              </Button>
              <Button asChild className="shadow-sm">
                <Link href="/register">Đăng Ký</Link>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/") && pathname === "/" ? "text-primary font-semibold" : "text-foreground",
                )}
              >
                Trang Chủ
              </Link>
              <Link
                href="/courses"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/courses") ? "text-primary font-semibold" : "text-foreground",
                )}
              >
                Khóa Học
              </Link>
              <Link
                href="/blog"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/blog") ? "text-primary font-semibold" : "text-foreground",
                )}
              >
                Blog
              </Link>
              <Link
                href="/resources"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/resources") ? "text-primary font-semibold" : "text-foreground",
                )}
              >
                Tài Liệu
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/contact") ? "text-primary font-semibold" : "text-foreground",
                )}
              >
                Liên Hệ
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/login">Đăng Nhập</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/register">Đăng Ký</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
