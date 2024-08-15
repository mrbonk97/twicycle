"use client";
import { Loader, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState, WheelEvent } from "react";
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
      </Canvas>
    </main>
  );
}
