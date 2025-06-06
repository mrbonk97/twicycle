import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 첫 방문이면 /land로 리디렉트하고 visited 쿠키를 설정
export function middleware(request: NextRequest) {
  const visited = request.cookies.get("visited");

  // 첫 방문자이고 루트 페이지("/")에 접근한 경우
  if (!visited && request.nextUrl.pathname === "/") {
    const res = NextResponse.redirect(new URL("/land", request.url));
    res.cookies.set("visited", "true", {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7일
    });
    return res;
  }

  // 방문한 적 없지만 루트 이외 경로 접근 시에도 쿠키는 설정
  if (!visited) {
    const res = NextResponse.next();
    res.cookies.set("visited", "true", {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  }

  // 이미 visited 쿠키가 있으면 그대로 진행
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
