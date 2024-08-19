import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CubeCardProps {
  title: string;
  icon: JSX.Element;
  url: string;
}

export const CubeCard = ({ title, url, icon }: CubeCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={url}
            className="w-12 sm:w-full aspect-square rounded-lg cursor-pointer flex items-center justify-center bg-secondary hover:opacity-80 duration-200"
          >
            {icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="z-[200]">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
