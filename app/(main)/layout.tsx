import { Footer } from "@/components/footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout = async ({ children }: Props) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
