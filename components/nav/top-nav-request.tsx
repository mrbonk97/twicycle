import { Logo } from "../logo";

export const TopnavRequest = () => {
  return (
    <header className="fixed z-[101] top-0 px-10 md:px-[10%] h-20 w-full flex items-center justify-between bg-primary-foreground border-b">
      <h2>새로운 장소 제보하기</h2>
      <Logo />
    </header>
  );
};
