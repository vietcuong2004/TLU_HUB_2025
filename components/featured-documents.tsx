import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Download } from "lucide-react"

const documents = [
  {
    id: 1,
    title: "Tuyển chọn những bài luận văn phát triển sản phẩm du lịch mang tính thực tiễn cao",
    date: "08-5-2024",
    views: 1250,
    downloads: 320,
    thumbnail: "/doc-tourism-thesis.jpg",
  },
  {
    id: 2,
    title: "Hướng dẫn làm đồ án hệ thống cung cấp điện cho xưởng cơ khí MỚI NHẤT",
    date: "07-8-2024",
    views: 980,
    downloads: 245,
    thumbnail: "/doc-electrical-engineering.jpg",
  },
  {
    id: 3,
    title: "Top 10 tài liệu trắc nghiệm dược lý có đáp án - Top Báo Cáo Thực Tập Tốt Nhất",
    date: "15-10-2024",
    views: 1560,
    downloads: 410,
    thumbnail: "/doc-pharmacy-quiz.jpg",
  },
  {
    id: 4,
    title: "Tổng hợp 10 tài liệu về thực tập động cơ hay nhất - Top Báo Cáo Thực Tập",
    date: "10-3-2024",
    views: 890,
    downloads: 210,
    thumbnail: "/doc-internship-report.jpg",
  },
]

export function FeaturedDocuments() {
  return (
    <section className="py-16 lg:py-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Tài liệu nổi bật</h2>
            <p className="text-gray-600">Khám phá các tài liệu học tập chất lượng cao</p>
          </div>
          <Link
            href="/resources"
            className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
          >
            Xem tất cả
            <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc) => (
            <Link key={doc.id} href={`/documents/${doc.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 h-full">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                    <Image
                      src={doc.thumbnail || "/placeholder.svg"}
                      alt={doc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-emerald-500 hover:bg-emerald-600 text-white border-0">
                      {doc.date}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[3rem]">
                      {doc.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{doc.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{doc.downloads}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
