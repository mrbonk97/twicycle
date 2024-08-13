import { Button } from "@/components/ui/button";
import { Bagel_Fat_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Bagel_Fat_One({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="h-full flex justify-center bg-[#8EC67F]">
      <div className="h-full w-full max-w-[1920px] bg-white relative">
        <h1
          className={`${inter.className} pt-20 text-center text-rose-400 text-6xl sm:text-8xl md:text-9xl`}
        >
          이인거
        </h1>
        <h2
          className={`${inter.className} pt-1 sm:pt-3 md:pt-5 text-rose-400 text-center text-2xl sm:text-3xl md:text-4xl font-medium`}
        >
          2인승 자전거 대여 위치 검색 서비스
        </h2>
        <div className="mt-[15%] w-full relative  flex justify-center z-30">
          <Link
            href={"/main"}
            className="p-5 bg-secondary rounded-full text-xl text-rose-400 font-bold hover:opacity-80 duration-200"
          >
            주변 자전거 찾아보기
          </Link>
        </div>

        <Image
          className="absolute bottom-20 right-20 z-10"
          src={"/images/landing/person.svg"}
          width={600}
          height={600}
          alt="person"
        />
        <Image
          className="absolute bottom-0 w-full"
          src={"/images/landing/ground.svg"}
          width={1000}
          height={300}
          alt="ground"
        />
        <Image
          className="absolute left-40 bottom-60"
          src={"/images/landing/tree1.svg"}
          width={200}
          height={200}
          alt="ground"
        />
        <Image
          className="absolute right-60 bottom-96"
          src={"/images/landing/tree2.svg"}
          width={200}
          height={200}
          alt="ground"
        />
        <Image
          className="absolute left-[45%] bottom-96"
          src={"/images/landing/tree3.svg"}
          width={200}
          height={200}
          alt="ground"
        />
      </div>
    </main>
  );
}

// Twicycle
