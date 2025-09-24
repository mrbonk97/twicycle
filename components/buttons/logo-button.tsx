import { cn } from "@/lib/utils";
import { Bagel_Fat_One } from "next/font/google";
import Link from "next/link";

const bagle = Bagel_Fat_One({
  subsets: ["latin"],
  weight: ["400"],
});

interface Props {
  className?: string;
}

export function LogoButton({ className }: Props) {
  return (
    <Link href={"/"} className={cn(`${bagle.className} text-4xl text-blue-400`, className)}>
      이인거
    </Link>
  );
}
