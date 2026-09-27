import { AnnouncementBar } from "@/components/navigation/AnnouncementBar";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { FloatingWidget } from "@/components/ui/FloatingWidget";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWidget />
    </div>
  );
}
