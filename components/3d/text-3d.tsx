import { Text3D, useFont } from "@react-three/drei";

interface Text3dProps {
  position: [number, number, number];
  text: string;
  size?: number;
  onClick?: () => void;
}

export const TText3d = ({ position, text, size = 1, onClick }: Text3dProps) => {
  const font = useFont("/fonts/bagle_fat_one.json");

  return (
    <Text3D
      onClick={onClick}
      position={position}
      rotation={[0.02, 0, 0]}
      size={size}
      font={font.data}
    >
      {text}
      <meshStandardMaterial color="#3b82f6" />
    </Text3D>
  );
};
