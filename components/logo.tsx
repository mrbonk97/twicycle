import Link from "next/link";
import { bagelFatOne } from "@/lib/fonts";

interface Props {
  size?: "default" | "small";
}

export const Logo = ({ size = "default" }: Props) => (
  <Link href={"/"} className={`shrink-0 text-blue-400 ${bagelFatOne.className}`}>
    <h4 className={size == "default" ? `text-3xl` : "text-xl"}>이인거</h4>
  </Link>
);
