import { LogoButton } from "@/components/buttons/logo-button";
import { MenuButton } from "@/components/buttons/menu-button";
import { SearchButton } from "@/components/buttons/search-button";

interface Props {
  baseUrl: string;
}
export function TopnavMobile({ baseUrl }: Props) {
  return (
    <nav className="z-[101] fixed flex sm:hidden top-0 left-0 pl-2 h-12 w-full items-center justify-between bg-background border-b">
      <LogoButton className="text-2xl" />
      <div className="flex">
        <SearchButton baseUrl={baseUrl} />
        <MenuButton />
      </div>
    </nav>
  );
}
