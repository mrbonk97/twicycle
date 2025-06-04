import { MountainIcon } from "lucide-react";

interface Props {
  title: string;
}

export const LocationHeader = ({ title }: Props) => {
  return (
    <header className="static z-10 sm:sticky top-20 p-5 h-14 sm:h-auto flex items-center gap-2 bg-background border-b">
      <MountainIcon className="text-blue-500" />
      <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
    </header>
  );
};
