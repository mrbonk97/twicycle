"use client";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, WheelEvent } from "react";
import { useRouter } from "next/navigation";
import { Bicycle3d1 } from "@/components/object/bicycle3d1";
import { Text3d } from "@/components/object/text3d";
import { Bicycle3d2 } from "@/components/object/bicycle3d2";
import { Bicycle3d3 } from "@/components/object/bicycle3d3";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export default function Home() {
  const [z, setZ] = useState(0);
  const router = useRouter();

  const handleScroll = (e: WheelEvent<HTMLElement>) => {
    if (e.deltaY == -100) setZ((cur) => cur + 0.1);
    if (e.deltaY == 100) setZ((cur) => cur - 0.1);
  };

  const handleNextPage = () => {
    let delta = 0.01;
    setInterval(() => {
      setZ((cur) => cur + delta);
      delta += 0.0001;
    }, 1);

    setTimeout(() => router.push("/main"), 1000);
  };

  return (
    <main className="h-full w-full" onWheel={handleScroll}>
      <Suspense
        fallback={
          <div className="h-full w-full flex2">
            <Spinner />
          </div>
        }
      >
        <button
          onClick={handleNextPage}
          className="fixed z-50 h-28 w-28 rounded-full overflow-hidden group bottom-1/4 left-1/2 -translate-x-1/2"
        >
          <Link href={"/main"} className="sr-only"></Link>
          <div className="absolute top-0 left-0 h-full w-full -translate-y-full group-hover:translate-y-0 duration-300">
            <div className="h-full w-full bg-white" />
            <div className="h-full w-full bg-[#5D90BE]" />
          </div>
          <span className="relative z-50 text-lg font-medium duration-300 text-white group-hover:text-[#5D90BE]">
            자전거 찾기
          </span>
        </button>
        <Canvas>
          <Sky />
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Text3d
            scale={1}
            y={2}
            x={0}
            z={z}
            text={"이인거"}
            fontWeight={900}
          />
          <Text3d
            scale={1}
            y={1.2}
            x={0}
            z={z}
            text={"2인용 자전거 대여 위치 검색 서비스"}
            fontSize={0.2}
            fontWeight={700}
          />
          {/* 우측 위 */}
          <Bicycle3d1 x={4} y={2} z={1 + z} rotateZ={2} rotateX={1} />
          {/* 왼쪽 중단 */}
          <Bicycle3d2 x={-4} y={0} z={1 + z} rotateY={0.5} rotateZ={1} />
          {/* 하단 가운데 */}
          <Bicycle3d3 x={1} y={-2} z={1 + z} rotateX={0} rotateY={0.5} />
          {/* 좌측 하단 */}
          <Bicycle3d1 x={-2} y={-1} z={1.5 + z} />
          {/* 중간쯤 오른쪽 멀리 */}
          <Bicycle3d2 x={2} y={0} z={0 + z} rotateY={-0.2} rotateZ={-0.2} />
          <Bicycle3d3 x={-2} y={0.5} z={-2 + z} rotateX={-0.3} rotateZ={1} />
          <Bicycle3d1 x={1} y={1} z={-5 + z} />
          <Bicycle3d3 x={5} y={6} z={-10 + z} />
          <Bicycle3d1 x={-6} y={5} z={-3 + z} rotateZ={0.2} />
          <Bicycle3d2 x={-8} y={6} z={-12 + z} rotateZ={-0.2} />
          <Bicycle3d3 x={0} y={0} z={-12 + z} rotateZ={0.4} rotateY={0.2} />
          <Bicycle3d1 x={3} y={-6} z={-13 + z} rotateZ={1.2} />
          <Bicycle3d2 x={-12} y={-6} z={-12 + z} />
          <Bicycle3d3 x={12} y={-6} z={-12 + z} />
        </Canvas>
      </Suspense>
    </main>
  );
}
