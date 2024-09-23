import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_JP } from "next/font/google"; //NotoSansJPフォントに統一
import "./globals.css";
import { cn } from "@/lib/utils"; //utilsのcn関数をインポート
import { siteConfig } from "@/config/site";

const fontNotoSansJP = Noto_Sans_JP({ subsets: ["latin"] }); //NotoSansJPフォントに統一

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "TailwindCSS", "shadcn/ui"],
  authors: [
    {
      name: "Kaoru Koide",
      url: siteConfig.url,
    },
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "ja",
    url: siteConfig.url, 
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@KaoruKoide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "bg-background antialiased min-h-screen",
          fontNotoSansJP.className //NotoSansJPフォントに統一
        )}
      >
        {children}
      </body>
    </html>
  );
}