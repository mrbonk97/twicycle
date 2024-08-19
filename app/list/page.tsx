import { LocationList } from "./_component/location-list";

const ListPage = () => {
  return (
    <>
      <main className="pb-10 pr-3 pt-48 sm:pt-20 sm:pl-[14rem] md:pl-[19rem] lg:pl-[24rem] min-h-full w-full">
        <LocationList />
      </main>
    </>
  );
};

export default ListPage;
