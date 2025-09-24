import Link from "next/link";

function NotFound() {
  return (
    <main className="h-full">
      <h1 className="pt-16 text-center text-4xl font-bold text-blue-400">404</h1>
      <p className="mt-4 text-center font-medium opacity-80">요청하신 페이지를 찾을 수 없습니다.</p>
      <Link href={"/"} className="block mt-8 mx-auto w-fit underline-offset-2 hover:underline">
        홈으로
      </Link>
    </main>
  );
}

export default NotFound;
