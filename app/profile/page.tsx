import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-foreground">Hồ sơ cá nhân</h1>
            <p className="mt-4 text-lg text-muted-foreground">Phát triển sau</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
