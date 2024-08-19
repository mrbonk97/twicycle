import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이인거",
  description: "2인승 자전거 찾기",
  keywords: ["자전거", "bicycle", "대여", "2인승 자전거"],

  openGraph: {
    images: ["https://www.twicycle.site/images/meta.png"],
    title: "이인거",
    description: "2인승 자전거 찾기",
    locale: "ko",
    tags: ["website", "bicycle", "rent"],
    url: "https://www.twicycle.site",
  },
  twitter: {
    images: ["https://www.twicycle.site/images/meta.png"],
    title: "이인거",
    description: '  description: "2인승 자전거 찾기",',
    creator: "mrbonk97",
    site: "https://www.twicycle.site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <Script
        id="naver-map-script"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_CLIENT_ID}`}
      />
      <body className={inter.className}>
        <Suspense>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
