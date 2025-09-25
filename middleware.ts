import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const visited = req.cookies.get("visited");
  const url = req.nextUrl.clone();

  // 방문한 적 없고, 지금 /landing이 아닌 경우
  if (!visited && url.pathname !== "/landing") {
    url.pathname = "/landing";
    const res = NextResponse.redirect(url);
    res.cookies.set("visited", "true", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1년
    });
    return res;
  }

  // 이미 방문했거나 /landing 페이지면 그대로 진행
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|3d).*)"],
};
