import { Leftnav } from "@/components/nav/left-nav";
import { TopnavMobile } from "@/components/nav/top-nav-mobile";

interface Props {
  children: Readonly<React.ReactNode>;
}

async function LocationLayout({ children }: Props) {
  return (
    <>
      <Leftnav />
      <TopnavMobile baseUrl="/locations" />
      {children}
    </>
  );
}

export default LocationLayout;
