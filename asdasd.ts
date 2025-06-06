import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 첫 방문이면 /land로 리디렉트하고 visited 쿠키를 설정
export function middleware(request: NextRequest) {
  const visited = request.cookies.get("visited");

  if (!visited && request.nextUrl.pathname === "/") {
    const res = NextResponse.redirect(new URL("/land", request.url));
    res.cookies.set("visited", "true", {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30일
    });
    return res;
  }

  if (!visited) {
    const res = NextResponse.next();
    res.cookies.set("visited", "true", {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    return res;
  }

  return NextResponse.next();
}
