import { bagelFatOne } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link
    href={"/"}
    className={`flex items-center shrink-0 gap-2 text-blue-400 ${bagelFatOne.className}`}
  >
    <Image src={"/logo.png"} alt="이인거" height={64} width={64} />
    <h4 className="text-3xl">이인거</h4>
  </Link>
);
