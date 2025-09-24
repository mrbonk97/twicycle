import { NaverMap } from "@/components/map/naver-map";
import { RegionSection } from "@/components/section/region-section";
import { getFilteredLocations } from "@/lib/utils";
import { Mountain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

async function LocationsIdPage({ params }: Props) {
  const { id } = await params;
  const location = getFilteredLocations(id)[0];

  return (
    <>
      <RegionSection region={location.region ?? "all"} />
      <main className="sm:pl-60 lg:pl-80 pb-20">
        <header className="z-10 sticky top-0 hidden sm:flex p-4 h-16 items-center gap-2 border-b bg-card">
          <Mountain className="text-blue-400" />
          <h1 className="font-semibold">{location.title}</h1>
        </header>
        <div className="mt-14 sm:mt-0 p-4 mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold opacity-80">{location.title}</h2>
          <Image
            priority
            height={1080}
            width={1080}
            alt={location.title}
            src={location.image ?? "/location-placeholder.jpg"}
            className="mt-4 h-60 sm:h-96 w-full aspect-square object-cover rounded-lg"
          />
          <section className="mt-4 pt-2 border-t">
            <h4 className="text-lg font-bold opacity-70">주소</h4>
            <div className="mt-2 font-semibold opacity-80">{location.address}</div>
            <div className="font-semibold opacity-80">{location.location}</div>
          </section>
          <section className="mt-8">
            <h4 className="text-lg font-bold opacity-70 tracking-tight">운영기간</h4>
            <div className="mt-2 font-semibold opacity-80">{location.businessMonth}</div>
            <div className="font-semibold opacity-80">{location.businessHours}</div>
          </section>
          <section className="mt-8">
            <h4 className="text-lg font-bold opacity-70 tracking-tight">가격</h4>
            <div className="mt-2 font-semibold opacity-80 whitespace-pre-line">{location.price}</div>
          </section>
          <section className="mt-8">
            <h4 className="text-lg font-bold opacity-70 tracking-tight">연락처</h4>
            <div className="mt-2 font-semibold opacity-80 whitespace-pre-line">{location.contact}</div>
          </section>
          <section className="mt-8">
            <h4 className="text-lg font-bold opacity-70 tracking-tight">지도</h4>
            <NaverMap className="mt-2 h-96 rounded-lg" q={undefined} location={location} locations={[location]} />
            <Link
              scroll={false}
              href={`/?id=${location.id}`}
              className="mt-4 block p-4 rounded-lg text-right bg-primary text-primary-foreground"
            >
              지도에서 보기
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default LocationsIdPage;
