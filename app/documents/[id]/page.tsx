import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Share2, Eye, DownloadIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - in real app, fetch based on id
const document = {
  id: 1,
  title: "Tuyển chọn những bài luận văn phát triển sản phẩm du lịch mang tính thực tiễn cao",
  description:
    "Tài liệu này tổng hợp các bài luận văn xuất sắc về phát triển sản phẩm du lịch, bao gồm các nghiên cứu thực tiễn, phân tích thị trường và đề xuất chiến lược phát triển sản phẩm du lịch bền vững.",
  features: [
    "Phân tích thị trường du lịch hiện tại",
    "Các mô hình phát triển sản phẩm du lịch thành công",
    "Chiến lược marketing cho sản phẩm du lịch mới",
    "Nghiên cứu trường hợp từ các điểm đến du lịch nổi tiếng",
    "Đề xuất giải pháp phát triển bền vững",
  ],
  price: "50.000 VND",
  pages: 125,
  format: "PDF",
  date: "08-5-2024",
  author: "TS. Nguyễn Văn A",
  views: 1250,
  downloads: 320,
  thumbnail: "/doc-tourism-thesis.jpg",
}

const relatedDocuments = [
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

export default function DocumentDetailPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Document Details */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                  <TabsTrigger
                    value="description"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Mô tả
                  </TabsTrigger>
                  <TabsTrigger
                    value="details"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Chi tiết
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Đánh giá
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-gray-700 mb-6 leading-relaxed">{document.description}</p>
                      <p className="text-gray-700 mb-4">
                        Tài liệu này đặc biệt hữu ích cho sinh viên ngành Du lịch, Quản trị Khách sạn, và các nhà nghiên
                        cứu trong lĩnh vực phát triển du lịch bền vững. Nội dung bao gồm:
                      </p>
                      <ul className="space-y-2">
                        {document.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="details" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between py-3 border-b">
                          <span className="text-gray-600">Số trang:</span>
                          <span className="font-semibold">{document.pages}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b">
                          <span className="text-gray-600">Định dạng:</span>
                          <span className="font-semibold">{document.format}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b">
                          <span className="text-gray-600">Ngày đăng:</span>
                          <span className="font-semibold">{document.date}</span>
                        </div>
                        <div className="flex justify-between py-3">
                          <span className="text-gray-600">Tác giả:</span>
                          <span className="font-semibold">{document.author}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-gray-500 text-center py-8">Chưa có đánh giá nào</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Related Documents */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tài liệu liên quan</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedDocuments.map((doc) => (
                    <Link key={doc.id} href={`/documents/${doc.id}`}>
                      <Card className="group hover:shadow-lg transition-all duration-300 h-full">
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
                            <h4 className="font-semibold text-sm text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {doc.title}
                            </h4>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                <span>{doc.views}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <DownloadIcon className="w-3 h-3" />
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
            </div>

            {/* Right Column - Pricing & Actions */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-1">{document.price}</div>
                    <p className="text-sm text-gray-500">Giá đã bao gồm VAT</p>
                  </div>

                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white mb-3 h-12">
                    <Download className="w-5 h-5 mr-2" />
                    Tải Xuống
                  </Button>

                  <Button variant="outline" className="w-full mb-6 h-12 bg-transparent">
                    <Share2 className="w-5 h-5 mr-2" />
                    Chia sẻ
                  </Button>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Thông tin tài liệu</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Số trang:</span>
                        <span className="font-medium">{document.pages}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Định dạng:</span>
                        <span className="font-medium">{document.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ngày đăng:</span>
                        <span className="font-medium">{document.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tác giả:</span>
                        <span className="font-medium">{document.author}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t mt-6 pt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Hỗ trợ khách hàng</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Nếu bạn có bất kỳ câu hỏi nào về tài liệu này, vui lòng liên hệ với chúng tôi.
                    </p>
                    <Link href="/contact" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                      Liên hệ hỗ trợ →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
