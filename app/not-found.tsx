import { LeftMenuNav } from "@/components/nav/left-menu-nav";
import { TopHomeNav } from "@/components/nav/top-home-nav";
import { bagelFatOne } from "@/lib/fonts";
import { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return { title: "오류 | 이인거" };
}

const NotFoundPage = () => {
  return (
    <>
      <TopHomeNav />
      <LeftMenuNav />
      <main className="md:pl-20 pt-12 lg:pt-0 h-full">
        <h2
          className={`pt-20 sm:pt-32 lg:pt-40 text-center text-9xl font-bold text-blue-400 ${bagelFatOne.className}`}
        >
          404
        </h2>
        <h1 className="mt-10 text-lg font-medium text-center">
          요청하신 페이지를 찾을 수 없습니다.
        </h1>
        <Link href={"/"} className="mt-5 block text-center hover:underline underline-offset-2">
          홈으로 이동
        </Link>
      </main>
    </>
  );
};

export default NotFoundPage;
