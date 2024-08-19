import { LeftRouternav } from "@/components/nav/left-router-nav";
import { Topnav1 } from "./_component/top-nav1";
import { Topnav2 } from "./_component/top-nav2";
import { SearchLeftnav } from "./_component/search-left-nav";

interface ListLayoutProps {
  children: React.ReactNode;
}

export default function ListLayout({ children }: ListLayoutProps) {
  return (
    <>
      <Topnav1 />
      <Topnav2 />
      <LeftRouternav />
      <SearchLeftnav />
      {children}
    </>
  );
}
