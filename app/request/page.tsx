import { TopnavRequest } from "@/components/nav/top-nav-request";
import { Leftnav } from "./_component/left-nav";
import { RequestCard } from "@/components/card/request-card";

const RequestPage = () => {
  return (
    <>
      <Leftnav />
      <TopnavRequest />
      <main className="pt-20 md:pl-20 min-h-[600px] h-full w-full md:flex md:items-center md:justify-center bg-secondary/30">
        <RequestCard />
      </main>
    </>
  );
};

export default RequestPage;
