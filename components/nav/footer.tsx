import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="sm:pl-20 xl:pl-[23rem] mt-40 bg-secondary">
      <div className="h-80 p-10">
        <h5 className="text-xl font-bold">이인거</h5>
        <ul className="mt-5 text-sm space-y-1">
          <li>
            <Link href={"/service-policy"} className="hover:underline underline-offset-2">
              이용약관
            </Link>
          </li>
          <li>
            <Link href={"/privacy-policy"} className="hover:underline underline-offset-2">
              개인정보처리방침
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://mrbonk97.github.io"}
              className="hover:underline underline-offset-2"
            >
              제작자 소개
            </Link>
          </li>
        </ul>
        <p className="mt-10 text-xs text-muted-foreground">이메일: hyunsuk1997@naver.com</p>
      </div>
    </footer>
  );
};
