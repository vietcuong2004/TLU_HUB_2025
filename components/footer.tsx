import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">TLU</span>
              </div>
              <span className="text-xl font-bold">HUB</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Nền tảng học tập trực tuyến hàng đầu dành cho sinh viên TLU. Cung cấp tài liệu, khóa học chất lượng cao.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Liên Kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground transition-colors hover:text-foreground">
                  Khóa Học
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground transition-colors hover:text-foreground">
                  Tài Liệu
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Liên Hệ</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@tluhub.edu.vn</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>024 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://facebook.com" target="_blank">
                    <Facebook className="h-4 w-4" />
                  </Link>
                </Button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Nhận Tin Tức</h3>
            <p className="mb-4 text-sm text-muted-foreground">Đăng ký để nhận thông tin về khóa học mới</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Email của bạn" />
              <Button>Đăng Ký</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 TLU HUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
