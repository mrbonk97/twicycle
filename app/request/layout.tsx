import { LeftNav } from "@/components/nav/left-nav";
import { TopnavMobile } from "@/components/nav/top-nav-mobile";

interface Props {
  children: Readonly<React.ReactNode>;
}

async function RequestLayout({ children }: Props) {
  return (
    <>
      <LeftNav />
      <TopnavMobile baseUrl="/locations" />
      {children}
    </>
  );
}

export default RequestLayout;
