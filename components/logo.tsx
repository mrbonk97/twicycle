import { Bagel_Fat_One } from "next/font/google";
import Image from "next/image";

export const bagelFatOne = Bagel_Fat_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const Logo = () => {
  return (
    <div
      className={`${bagelFatOne.className} w-32 text-2xl flex2 gap-2 text-blue-400`}
    >
      <Image src={"/logo.png"} width={50} height={50} alt="logo" />
      <h2>이인거</h2>
    </div>
  );
};
