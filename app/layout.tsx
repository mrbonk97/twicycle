import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Topnav } from "@/components/nav/top-nav";
import Script from "next/script";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "트와이시클",
  description: "2인승 자전거 찾기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Script
        id="naver-map-script"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_CLIENT_ID}`}
      />
      <body className={inter.className}>
        {/* <Topnav /> */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
