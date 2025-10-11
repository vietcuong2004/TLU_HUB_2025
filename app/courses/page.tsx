"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Clock, Users, Filter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const courses = [
  {
    id: 1,
    title: "Lập Trình Web Cơ Bản",
    description: "Học HTML, CSS, JavaScript từ đầu cho người mới bắt đầu",
    category: "Lập Trình",
    level: "Cơ Bản",
    price: "Miễn Phí",
    rating: 4.8,
    students: 1234,
    duration: "8 tuần",
    image: "/web-development-coding.png",
    instructor: "Nguyễn Văn A",
  },
  {
    id: 2,
    title: "React & Next.js Nâng Cao",
    description: "Xây dựng ứng dụng web hiện đại với React và Next.js",
    category: "Lập Trình",
    level: "Nâng Cao",
    price: "299.000đ",
    rating: 4.9,
    students: 856,
    duration: "12 tuần",
    image: "/react-nextjs-development.png",
    instructor: "Trần Thị B",
  },
  {
    id: 3,
    title: "UI/UX Design Cơ Bản",
    description: "Thiết kế giao diện người dùng chuyên nghiệp với Figma",
    category: "Thiết Kế",
    level: "Cơ Bản",
    price: "199.000đ",
    rating: 4.7,
    students: 645,
    duration: "6 tuần",
    image: "/ui-ux-design-figma.jpg",
    instructor: "Lê Văn C",
  },
  {
    id: 4,
    title: "Kỹ Năng Thuyết Trình",
    description: "Nâng cao kỹ năng thuyết trình và giao tiếp trước đám đông",
    category: "Kỹ Năng Mềm",
    level: "Trung Cấp",
    price: "149.000đ",
    rating: 4.6,
    students: 432,
    duration: "4 tuần",
    image: "/presentation-skills-public-speaking.jpg",
    instructor: "Phạm Thị D",
  },
  {
    id: 5,
    title: "Python cho Data Science",
    description: "Phân tích dữ liệu và machine learning với Python",
    category: "Lập Trình",
    level: "Trung Cấp",
    price: "399.000đ",
    rating: 4.9,
    students: 1089,
    duration: "10 tuần",
    image: "/python-data-science-machine-learning.jpg",
    instructor: "Hoàng Văn E",
  },
  {
    id: 6,
    title: "Marketing Digital",
    description: "Chiến lược marketing online hiệu quả cho doanh nghiệp",
    category: "Kinh Doanh",
    level: "Cơ Bản",
    price: "249.000đ",
    rating: 4.5,
    students: 567,
    duration: "8 tuần",
    image: "/digital-marketing-social-media.png",
    instructor: "Đỗ Thị F",
  },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-card py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-balance text-4xl font-bold">Khóa Học</h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Khám phá hàng trăm khóa học chất lượng cao từ các giảng viên hàng đầu
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-border py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative flex-1 lg:max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Tìm kiếm khóa học..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả danh mục</SelectItem>
                    <SelectItem value="Lập Trình">Lập Trình</SelectItem>
                    <SelectItem value="Thiết Kế">Thiết Kế</SelectItem>
                    <SelectItem value="Kỹ Năng Mềm">Kỹ Năng Mềm</SelectItem>
                    <SelectItem value="Kinh Doanh">Kinh Doanh</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Cấp độ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả cấp độ</SelectItem>
                    <SelectItem value="Cơ Bản">Cơ Bản</SelectItem>
                    <SelectItem value="Trung Cấp">Trung Cấp</SelectItem>
                    <SelectItem value="Nâng Cao">Nâng Cao</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Hiển thị {filteredCourses.length} khóa học</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="group overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <Badge className="absolute right-2 top-2">{course.category}</Badge>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline">{course.level}</Badge>
                      <span className="text-lg font-bold text-primary">{course.price}</span>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Giảng viên: {course.instructor}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/courses/${course.id}`}>Xem Chi Tiết</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
