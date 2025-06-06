import { Footer } from "@/components/nav/footer";
import { LeftMenuNav } from "@/components/nav/left-menu-nav";

interface Props {
  children: React.ReactNode;
}

const MainLayout = async ({ children }: Props) => {
  return (
    <>
      <LeftMenuNav />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
