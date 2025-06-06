import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { LocationHeader } from "@/components/location-header";
import { getRentalById } from "@/actions/action";
import { NaverMapWithPin } from "@/components/map/naver-map-with-pin";
import { TopLocationNav } from "@/components/nav/top-location-nav";
import { LeftRegionNav } from "@/components/nav/left-region-nav";
import { TopRegionNav } from "@/components/nav/top-region-nav";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const location = getRentalById(id);
  if (!location) notFound();

  return { title: `${location.title} | 이인거` };
}

const LocationIdPage = async ({ params }: Props) => {
  const id = (await params).id;
  const location = getRentalById(id);
  if (!location) notFound();

  return (
    <>
      <TopLocationNav />
      <LeftRegionNav />
      <main className="pt-14 sm:pt-20 sm:pl-20 xl:pl-[23rem]">
        <TopRegionNav />
        <LocationHeader title={location.title} />
        <div className="mt-0 sm:mt-10 p-5 mx-auto max-w-4xl flex flex-col items-center">
          <Image
            src={location.image || "/images/location-placeholder.jpg"}
            alt={location.title}
            height={512}
            width={1024}
            className="w-full h-80 sm:h-[600px] rounded-lg object-cover"
          />
          <section className="mt-5 p-5 w-full text-center border-y relative">
            <p className="pl-10 text-xl font-semibold">
              {location.address}
              <CopyButton
                message={`${process.env.TWICYCLE_URL}/locations/${location.id}`}
                className="pl-1"
              />
            </p>
            <p>{location.location}</p>
          </section>
          <section className="p-5 w-full">
            <h4 className="text-lg sm:text-xl font-semibold">운영시간</h4>
            <p className="mt-5 px-5 text-sm sm:text-base">{location.businessHours}</p>
          </section>
          <section className="mt-5 p-5 w-full border-t">
            <h4 className="text-lg sm:text-xl font-semibold">이용기간</h4>
            <p className="mt-5 px-5 text-sm sm:text-base">{location.businessMonth}</p>
          </section>
          <section className="mt-5 p-5 w-full border-t">
            <h4 className="text-lg sm:text-xl font-semibold">가격</h4>
            <p className="mt-5 px-5 text-sm sm:text-base">{location.price}</p>
          </section>
          <section className="mt-5 p-5 w-full border-t">
            <h4 className="text-lg sm:text-xl font-semibold">연락처</h4>
            <p className="mt-5 px-5 text-sm sm:text-base">{location.contact}</p>
          </section>
          <section className="mt-5 p-5 h-96 sm:h-[512px] w-full rounded-lg overflow-hidden border-t">
            <NaverMapWithPin location={location} />
          </section>
          <section className="pt-0 sm:pt-5 p-5 w-full">
            <Button className="py-6 w-full" asChild>
              <Link href={`/?id=${location.id}`}>지도에서 보기</Link>
            </Button>
          </section>
        </div>
      </main>
    </>
  );
};

export default LocationIdPage;
