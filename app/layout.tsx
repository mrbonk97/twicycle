import "./globals.css";
import type { Metadata } from "next";
import { notoSans } from "@/lib/fonts";
import { NaverMapScript } from "@/components/map/naver-map-script";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";

export const metadata: Metadata = {
  title: "이인거",
  description: "이인승 자전거 대여 위치찾기 서비스",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <NaverMapScript />
      <body className={`${notoSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
