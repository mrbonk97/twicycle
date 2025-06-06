"use client";

import { LeftMenuNav } from "@/components/nav/left-menu-nav";
import { TopHomeNav } from "@/components/nav/top-home-nav";
import { bagelFatOne } from "@/lib/fonts";

interface Props {
  error: Error & { digest?: string };
}

const Error = ({ error }: Props) => {
  return (
    <>
      <TopHomeNav />
      <LeftMenuNav />
      <main className="md:pl-20 pt-12 lg:pt-0 h-full">
        <h2
          className={`pt-20 sm:pt-32 lg:pt-40 text-center text-9xl font-bold text-blue-400 ${bagelFatOne.className}`}
        >
          ERROR
        </h2>
        <p className="mt-10 text-sm text-center">{error.message}</p>
      </main>
    </>
  );
};

export default Error;
