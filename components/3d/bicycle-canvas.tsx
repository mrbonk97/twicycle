"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";

import { TText3d } from "@/components/3d/text-3d";
import { Bicycle3d1 } from "@/components/3d/bicycle-3d-1";
import { Bicycle3d2 } from "@/components/3d/bicycle-3d-2";
import { Bicycle3d3 } from "@/components/3d/bicycle-3d-3";
import { StartButton } from "@/components/3d/start-button";

export const BicycleCanvas = () => {
  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <Sky />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <TText3d size={1} position={[-2, 1, 0]} text={"이인거"} />
      <TText3d size={0.2} position={[-2, 0, 0]} text={"2인용 자전거 대여 위치 검색 서비스"} />
      <StartButton position={[0, 0, 0]} />

      {/* 우측 위 */}
      <Bicycle3d1 x={4} y={2} z={1} rotateZ={2} rotateX={1} />
      {/* 왼쪽 중단 */}
      <Bicycle3d2 x={-4} y={0} z={1} rotateY={0.5} rotateZ={1} />
      {/* 하단 가운데 */}
      <Bicycle3d3 x={1} y={-2} z={1} rotateX={0} rotateY={0.5} />
      {/* 좌측 하단 */}
      <Bicycle3d1 x={-2} y={-1} z={1.5} />
      {/* 중간쯤 오른쪽 멀리 */}
      <Bicycle3d2 x={2} y={0} z={0} rotateY={-0.2} rotateZ={-0.2} />
      <Bicycle3d3 x={-2} y={0.5} z={-2} rotateX={-0.3} rotateZ={1} />
      <Bicycle3d1 x={1} y={1} z={-5} />
      <Bicycle3d3 x={5} y={6} z={-10} />
      <Bicycle3d1 x={-6} y={5} z={-3} rotateZ={0.2} />
      <Bicycle3d2 x={-8} y={6} z={-12} rotateZ={-0.2} />
      <Bicycle3d3 x={0} y={0} z={-12} rotateZ={0.4} rotateY={0.2} />
      <Bicycle3d1 x={3} y={-6} z={-13} rotateZ={1.2} />
      <Bicycle3d2 x={-12} y={-6} z={-12} />
      <Bicycle3d3 x={12} y={-6} z={-12} />
    </Canvas>
  );
};
