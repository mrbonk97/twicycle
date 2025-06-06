import { Rq2 } from "@/components/rq2";
import { MenuSheet } from "@/components/nav/menu-sheet";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "장소 제보 | 이인거" };
}

const RequestPage = () => {
  return (
    <main className="sm:pl-20 min-h-full">
      <header className="p-5 h-20 flex items-center justify-between border-b">
        <div className="hidden sm:block" />
        <h1 className="text-center text-2xl font-bold opacity-80">새로운 장소 제보하기</h1>
        <MenuSheet />
      </header>
      <section className="p-5 sm:mt-10">
        <Rq2 />
      </section>
    </main>
  );
};

export default RequestPage;
