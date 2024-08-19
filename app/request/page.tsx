import { TopnavRequest } from "@/components/nav/top-nav-request";
import { RequestCards } from "./_component/request";
import { LeftRouternav } from "@/components/nav/left-router-nav";

const RequestPage = () => {
  return (
    <>
      <TopnavRequest />
      <LeftRouternav className="md:block z-[102]" />
      <main className="pt-20 md:pl-20 min-h-[600px] h-full w-full md:flex md:items-center md:justify-center bg-secondary/30">
        <RequestCards />
      </main>
    </>
  );
};

export default RequestPage;
