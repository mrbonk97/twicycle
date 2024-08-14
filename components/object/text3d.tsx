import { Text } from "@react-three/drei";

interface Text3dProps {
  x: number;
  y: number;
  z: number;
  scale: number;
  text: string;
  fontWeight?: number;
  fontSize?: number;
}

export const Text3d = ({
  x,
  y,
  z,
  scale,
  text,
  fontWeight = 400,
  fontSize = 1,
}: Text3dProps) => {
  return (
    <Text
      position={[x, y, z]}
      scale={[scale, scale, scale]}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={"#3b82f6"}
    >
      {text}
    </Text>
  );
};
