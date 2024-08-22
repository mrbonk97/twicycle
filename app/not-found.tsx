import { Button } from "@/components/ui/button";
import Link from "next/link";

const Notfound = () => {
  return (
    <main className="h-full flex2 flex-col gap-5 text-blue-400">
      <h1 className="text-5xl font-black">404 ERROR</h1>
      <h2 className="text-lg font-medium">
        요청하신 페이지를 찾을 수 없습니다.
      </h2>
      <Button variant={"link"} asChild>
        <Link href={"/main"}>메인으로 돌아가기</Link>
      </Button>
    </main>
  );
};

export default Notfound;
