"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
}

function Error({ error }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="h-full">
      <h1 className="pt-16 text-center text-4xl font-bold text-blue-400">오류가 발생했습니다</h1>
      <p className="mt-4 text-center font-medium opacity-80">{error.message}</p>
      <Link href={"/"} className="block mt-8 mx-auto w-fit underline-offset-2 hover:underline">
        홈으로
      </Link>
    </main>
  );
}

export default Error;
