import { Users, BookOpen, GraduationCap, Award } from "lucide-react"

const stats = [
  { icon: Users, value: "25K+", label: "Học Viên Tích Cực" },
  { icon: BookOpen, value: "899", label: "Tổng Khóa Học" },
  { icon: GraduationCap, value: "158", label: "Giảng Viên" },
  { icon: Award, value: "100%", label: "Tỷ Lệ Hài Lòng" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-3 inline-flex rounded-full bg-primary/10 p-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="mb-1 text-3xl font-bold text-foreground lg:text-4xl">{stat.value}</div>
              <div className="text-sm text-muted-foreground lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
