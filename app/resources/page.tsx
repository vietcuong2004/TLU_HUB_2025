import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Eye } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Slide Bài Giảng - Lập Trình Hướng Đối Tượng",
    description: "Tài liệu slide đầy đủ cho môn OOP, bao gồm lý thuyết và ví dụ",
    type: "Slide",
    subject: "Lập Trình",
    downloads: 1234,
    views: 5678,
    isFree: true,
  },
  {
    id: 2,
    title: "Đề Cương Môn Cấu Trúc Dữ Liệu",
    description: "Đề cương chi tiết, nội dung ôn tập và câu hỏi thường gặp",
    type: "Đề Cương",
    subject: "Lập Trình",
    downloads: 987,
    views: 3456,
    isFree: true,
  },
  {
    id: 3,
    title: "Bài Tập Lớn - Xây Dựng Website E-commerce",
    description: "Đề bài và hướng dẫn chi tiết cho BTL môn Web",
    type: "Bài Tập",
    subject: "Web Development",
    downloads: 456,
    views: 2345,
    isFree: false,
    price: "49.000đ",
  },
  {
    id: 4,
    title: "Video Hướng Dẫn - React Hooks",
    description: "Series video hướng dẫn sử dụng React Hooks trong dự án thực tế",
    type: "Video",
    subject: "Lập Trình",
    downloads: 789,
    views: 4567,
    isFree: false,
    price: "99.000đ",
  },
]

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-card py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-balance text-4xl font-bold">Tài Liệu Học Tập</h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Truy cập tài liệu học tập miễn phí và trả phí chất lượng cao
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Tài Liệu Miễn Phí</h2>
            </div>
            <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources
                .filter((r) => r.isFree)
                .map((resource) => (
                  <Card key={resource.id} className="transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <Badge>{resource.type}</Badge>
                        <Badge variant="outline">{resource.subject}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2">{resource.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          <span>{resource.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{resource.views}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="gap-2">
                      <Button className="flex-1 bg-transparent" variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        Xem
                      </Button>
                      <Button className="flex-1">
                        <Download className="mr-2 h-4 w-4" />
                        Tải về
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>

            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Tài Liệu Trả Phí</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources
                .filter((r) => !r.isFree)
                .map((resource) => (
                  <Card key={resource.id} className="transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <Badge>{resource.type}</Badge>
                        <span className="font-bold text-primary">{resource.price}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{resource.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          <span>{resource.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{resource.views}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Mua Ngay</Button>
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
