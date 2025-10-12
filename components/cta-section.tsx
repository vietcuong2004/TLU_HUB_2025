import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="border-y border-border bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-primary to-accent p-8 text-center lg:flex-row lg:p-12 lg:text-left">
          <div className="flex items-center gap-4">
            <div className="hidden rounded-full bg-white/20 p-4 lg:block">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white lg:text-3xl">Bắt Đầu Học Với TLU HUB</h2>
              <p className="text-white/90">Tham gia cùng hàng nghìn sinh viên đang học tập và phát triển</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="border-white text-white hover:bg-white/90 hover:text-primary"
              asChild
            >
              <Link href="/courses">Khám Phá Khóa Học</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
