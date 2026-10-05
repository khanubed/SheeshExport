import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { DynamicFloatingWidget } from "@/components/ui/DynamicFloatingWidget";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <Header />
      <main id="main-content" className="flex-1 flex flex-col" role="main">
        {children}
      </main>
      <Footer />
      <DynamicFloatingWidget />
    </div>
  );
}
