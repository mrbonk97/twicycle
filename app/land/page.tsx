import { BicycleCanvas } from "@/components/3d/bicycle-canvas";
import Link from "next/link";

const LandPage = () => {
  return (
    <main className="h-full w-full">
      <h1 className="sr-only">이인거</h1>
      <h2 className="sr-only">2인승 자전거 대여소 검색 서비스</h2>
      <Link href={"/"} className="sr-only">
        이동
      </Link>
      <BicycleCanvas />
    </main>
  );
};

export default LandPage;
