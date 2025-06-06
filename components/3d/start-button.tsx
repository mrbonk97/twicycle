import { useRouter } from "next/navigation";
import { TText3d } from "./text-3d";

interface Props {
  position: [number, number, number];
}

export const StartButton = ({ position }: Props) => {
  const router = useRouter();

  return (
    <mesh
      position={position}
      onClick={() => router.push("/")}
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
      }}
    >
      <TText3d position={[-0.25, -1.1, 0]} size={0.2} text="시작" />
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[1.5, 0.5, 0.2]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </mesh>
  );
};
