"use client";
import { Loader, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, WheelEvent } from "react";
import { useRouter } from "next/navigation";
import { Bicycle3d1 } from "@/components/object/bicycle3d1";
import { Text3d } from "@/components/object/text3d";
import { Bicycle3d2 } from "@/components/object/bicycle3d2";
import { Bicycle3d3 } from "@/components/object/bicycle3d3";

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
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Suspense fallback={null}>
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
          <Bicycle3d3 x={-2} y={0.5} z={-2 + z} />
        </Suspense>
        <Loader />
      </Canvas>
    </main>
  );
}
