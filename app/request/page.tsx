import { LogoButton } from "@/components/buttons/logo-button";
import { RequestForm } from "@/components/request-form";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "장소 제보 | 이인거" };
}

async function RequestPage() {
  return (
    <main className="pt-12 sm:pt-0 sm:pl-20 pb-20">
      <header className="p-4 h-16 hidden sm:flex items-center justify-between border-b">
        <LogoButton />
        <h1 className="text-center text-2xl font-bold opacity-80">새로운 장소 제보하기</h1>
      </header>
      <section className="p-4 mx-auto max-w-2xl">
        <RequestForm />
      </section>
    </main>
  );
}

export default RequestPage;
