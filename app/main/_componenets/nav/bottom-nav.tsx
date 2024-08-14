import { MENU_LIST } from "@/constants";
import { CubeCard } from "./cube-card";
import Link from "next/link";

export const Bottomnav = () => {
  return (
    <section className="sm:hidden fixed z-[101] bottom-0 w-full border-t flex flex-col items-center bg-background">
      <nav className="h-16 w-full flex items-center justify-evenly">
        {MENU_LIST.map((item) => (
          <BottomCard
            key={item.id}
            title={item.title}
            icon={item.icon}
            url={item.url}
          />
        ))}
      </nav>
    </section>
  );
};

interface BottomCardProps {
  title: string;
  icon: JSX.Element;
  url: string;
}

const BottomCard = ({ title, icon, url }: BottomCardProps) => {
  return (
    <Link
      href={url}
      className="w-12 flex flex-col gap-0.5 items-center justify-center"
    >
      {icon}
      <span className="text-xs">{title}</span>
    </Link>
  );
};
