"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Trang Chủ
            </Link>
            <Link href="/courses" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Khóa Học
            </Link>
            <Link href="/blog" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Blog
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Tài Liệu
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
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
              <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                Trang Chủ
              </Link>
              <Link
                href="/courses"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Khóa Học
              </Link>
              <Link href="/blog" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                Blog
              </Link>
              <Link
                href="/resources"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Tài Liệu
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
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
