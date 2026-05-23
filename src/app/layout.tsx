import type { Metadata } from "next";
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
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
