"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import {
  Mail,
  Wallet,
  CreditCard,
  BookOpen,
  Download,
  TrendingUp,
  Settings,
  LogOut,
  Crown,
  Calendar,
  FileText,
  History,
  Edit,
  Eye,
  EyeOff,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!mounted || !user) {
    return null
  }

  // Mock data for demo
  const profileData = {
    isVIP: false,
    vipEndDate: null,
    balance: 50000,
    totalSpent: 150000,
    purchasedDocs: [
      { id: 1, title: "Giáo trình Lập trình C++", date: "15/01/2025", price: 50000 },
      { id: 2, title: "Bài tập Cấu trúc dữ liệu", date: "10/01/2025", price: 30000 },
      { id: 3, title: "Đề thi Toán cao cấp", date: "05/01/2025", price: 20000 },
    ],
    freeDocs: [
      { id: 1, title: "Hướng dẫn sử dụng Git", date: "20/01/2025" },
      { id: 2, title: "Tài liệu HTML/CSS cơ bản", date: "18/01/2025" },
    ],
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-background to-muted/20 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Profile Header */}
          <Card className="mb-8 border-2">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <Avatar className="h-24 w-24 border-4 border-primary/20">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} />
                  <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    {profileData.isVIP ? (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        <Crown className="h-3 w-3 mr-1" />
                        VIP
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Miễn phí</Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>{user.email}</span>
                    </div>
                  </div>

                  {!profileData.isVIP && (
                    <Button className="mt-2" size="sm">
                      <Crown className="h-4 w-4 mr-2" />
                      Nâng cấp VIP
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Finance Section */}
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-primary" />
                  Tài chính
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-gradient-to-br from-primary to-primary/80 p-6 text-white">
                  <p className="text-sm opacity-90">Số dư hiện tại</p>
                  <p className="text-3xl font-bold mt-1">{profileData.balance.toLocaleString("vi-VN")} đ</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button className="w-full" variant="default">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Nạp tiền
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <History className="h-4 w-4 mr-2" />
                    Lịch sử
                  </Button>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tổng chi tiêu</span>
                    <span className="font-semibold">{profileData.totalSpent.toLocaleString("vi-VN")} đ</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Stats */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Thống kê học tập
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">{profileData.purchasedDocs.length}</p>
                    <p className="text-sm text-muted-foreground">Tài liệu đã mua</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">{profileData.freeDocs.length}</p>
                    <p className="text-sm text-muted-foreground">Tài liệu miễn phí</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Download className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">
                      {profileData.purchasedDocs.length + profileData.freeDocs.length}
                    </p>
                    <p className="text-sm text-muted-foreground">Tổng tài liệu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Purchased Documents */}
            <Card className="md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Tài liệu đã mua
                </CardTitle>
                <CardDescription>Danh sách tài liệu bạn đã mua gần đây</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profileData.purchasedDocs.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{doc.title}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {doc.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-primary">
                          {doc.price.toLocaleString("vi-VN")} đ
                        </span>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Free Documents */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileText className="h-4 w-4 text-primary" />
                  Tài liệu miễn phí
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profileData.freeDocs.map((doc) => (
                    <div key={doc.id} className="p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                      <p className="font-medium text-sm">{doc.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{doc.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Cài đặt tài khoản
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 lg:grid-cols-[1fr,auto]">
                  {/* Left Column - Form Fields */}
                  <div className="space-y-6">
                    {/* Personal Information Section */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Thông tin</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="username">Tên người dùng</Label>
                          <div className="relative">
                            <Input id="username" defaultValue="User#123" className="pr-10" />
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                            >
                              <Edit className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="dob">Ngày sinh</Label>
                          <div className="relative">
                            <Input id="dob" type="date" defaultValue="2004-06-20" className="pr-10" />
                            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="gender">Giới tính</Label>
                          <div className="relative">
                            <Input id="gender" defaultValue="Nam" className="pr-10" />
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                            >
                              <Edit className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Địa chỉ</Label>
                          <div className="relative">
                            <Input id="address" defaultValue="Đông Đa - Hà Nội" className="pr-10" />
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                            >
                              <Edit className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Email & Password Section */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Email tài khoản & Mật khẩu</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Input id="email" type="email" defaultValue={user.email} className="pr-10" />
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                            >
                              <Edit className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="new-password">Mật khẩu mới</Label>
                          <div className="relative">
                            <Input
                              id="new-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••••••••"
                              className="pr-10"
                            />
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <Eye className="h-4 w-4 text-muted-foreground" />
                              )}
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
                          <div className="relative">
                            <Input
                              id="confirm-password"
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="••••••••••••••"
                              className="pr-10"
                            />
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <Eye className="h-4 w-4 text-muted-foreground" />
                              )}
                            </Button>
                          </div>
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90 text-white">CẬP NHẬT THÔNG TIN</Button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Avatar (only visible on large screens) */}
                  <div className="hidden lg:flex flex-col items-center justify-start pt-4">
                    <Avatar className="h-32 w-32 border-4 border-primary/20">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} />
                      <AvatarFallback className="text-4xl">{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="mt-4 text-sm text-muted-foreground">Đổi Avatar</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-center">
                  <Button variant="destructive" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Đăng xuất
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
