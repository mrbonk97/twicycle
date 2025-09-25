import Link from "next/link";
import { Bagel_Fat_One } from "next/font/google";
import { Cloud } from "lucide-react";
import SkyCanvas from "@/components/3d/sky-canvas";

const bagle = Bagel_Fat_One({
  subsets: ["latin"],
  weight: ["400"],
});

function LandingPage() {
  return (
    <main className="relative h-full min-h-[640px]">
      <header className="absolute z-10 top-0 left-0 right-0 p-4">
        <h1
          className={`mt-8 lg:mt-16 text-center text-5xl lg:text-9xl font-bold text-blue-400 lg:text-white ${bagle.className}`}
        >
          이인거
        </h1>
        <p
          className={`mt-4 lg:mt-8 text-center text-lg lg:text-4xl text-blue-400 lg:text-white font-semibold ${bagle.className}`}
        >
          곳곳에 숨여있는 이인승 자전거 대여소 찾기
        </p>
      </header>
      <Link
        href={"/"}
        className="absolute z-10 bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2 hover:opacity-80 duration-150"
      >
        <Cloud fill="#42A5F5" stroke="none" size={128} />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 font-bold  text-white">시작</span>
      </Link>
      <SkyCanvas />
    </main>
  );
}

export default LandingPage;
