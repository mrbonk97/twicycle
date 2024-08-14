import { MENU_LIST } from "@/constants";
import { CubeCard } from "./cube-card";

export const Leftnav1 = () => (
  <aside className="fixed z-20 left-0 p-5 px-2 h-full w-20 border-r bg-background">
    <nav className="space-y-4 text-blue-400">
      {MENU_LIST.map((item) => (
        <CubeCard
          key={item.id}
          title={item.title}
          icon={item.icon}
          url={item.url}
        />
      ))}
    </nav>
  </aside>
);
