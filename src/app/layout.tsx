import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interactive UI Lab",
  description: "React and TypeScript UI experiments for web production portfolios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className="h-full antialiased"
      suppressHydrationWarning // サーバーとクライアントでDOM内容が異なっても警告出さない
    >
      <body className="flex min-h-full flex-col">
        <AppProviders>
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
