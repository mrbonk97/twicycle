import { Bagel_Fat_One } from "next/font/google";
import Image from "next/image";

const inter = Bagel_Fat_One({ subsets: ["latin"], weight: ["400"] });

export const Logo = () => {
  return (
    <div
      className={`${inter.className} w-40 text-3xl flex items-center gap-2 text-blue-400`}
    >
      <Image src={"/logo.png"} width={60} height={60} alt="logo" />
      이인거
    </div>
  );
};
