"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { Bicycle } from "@/components/3d/bicycle";
import { Cloud1 } from "@/components/3d/cloud-1";
import { Cloud2 } from "@/components/3d/cloud-2";
import { Cloud3 } from "@/components/3d/cloud-3";

const SkyCanvas = () => {
  return (
    <Canvas>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minDistance={5}
        maxDistance={20}
        autoRotate
        autoRotateSpeed={1.0}
      />
      <Sky />

      {/* 전체적으로 은은하게 */}
      <ambientLight intensity={2.5} />

      {/* Key Light: 오른쪽 위에서 강하게 */}
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />

      {/* Fill Light: 왼쪽 아래에서 약하게 */}
      <directionalLight position={[-10, -5, -5]} intensity={0.5} />

      {/* Back Light: 뒤쪽 위에서 실루엣 강조 */}
      <directionalLight position={[0, 8, -10]} intensity={1.0} />

      {/* 포인트 라이트 몇 개로 반짝임 보강 */}
      <pointLight position={[0, 5, 5]} intensity={0.7} />
      <pointLight position={[0, -5, 5]} intensity={0.3} />

      <Bicycle />
      <Cloud1 scale={0.4} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-8, 4, -6]} />
      <Cloud2 scale={0.5} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-6, -2, 5]} />
      <Cloud3 scale={0.6} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-4, 3, 0]} />
      <Cloud1 scale={0.3} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-7, 6, 2]} />
      <Cloud2 scale={0.5} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-5, -3, -4]} />
      <Cloud3 scale={0.6} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-9, 2, 7]} />
      <Cloud1 scale={0.4} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-3, 5, -8]} />

      <Cloud2 scale={0.4} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[8, 3, -7]} />
      <Cloud3 scale={0.6} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[6, -4, 2]} />
      <Cloud1 scale={0.5} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[9, 5, 4]} />
      <Cloud2 scale={0.7} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[5, 2, -5]} />
      <Cloud3 scale={0.4} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[7, -2, 7]} />
      <Cloud1 scale={0.6} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[4, 6, 0]} />
      <Cloud2 scale={0.5} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[10, 1, -3]} />

      <Cloud3 scale={0.3} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0, 5, -9]} />
      <Cloud1 scale={0.5} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[2, -3, -6]} />
      <Cloud2 scale={0.6} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-2, 4, 6]} />
      <Cloud3 scale={0.4} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0, -5, 4]} />
      <Cloud1 scale={0.5} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[3, 2, 0]} />
      <Cloud2 scale={0.6} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-3, -4, -2]} />
      <Cloud3 scale={0.4} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[1, 6, 8]} />
    </Canvas>
  );
};

export default SkyCanvas;
