import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              Xây Dựng Kỹ Năng Với <span className="text-primary">Khóa Học Trực Tuyến</span>
            </h1>

            <p className="mb-8 text-pretty text-lg text-muted-foreground lg:text-xl">
              Nền tảng học tập hàng đầu dành cho sinh viên TLU. Truy cập hàng trăm khóa học chất lượng cao và tài liệu
              học tập miễn phí.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="gap-2 shadow-lg shadow-primary/25">
                <Link href="/courses">
                  Khám Phá Ngay
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
                <Link href="/resources">
                  <Play className="h-4 w-4" />
                  Xem Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/tlu-hub-logo.png"
                alt="TLU HUB - Tri Thức TLU Vững Bước Tương Lai"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
