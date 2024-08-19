import { Button } from "@/components/ui/button";
import { RENTAL_LOCATION } from "@/constants";
import {
  CalendarIcon,
  CircleDollarSignIcon,
  ClockIcon,
  LocateFixedIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ListDetailPage = ({ params }: { params: { id: number } }) => {
  console.log(params.id);
  const _location = RENTAL_LOCATION.filter((item) => item.id == params.id);
  if (_location.length == 0) return null;
  const location = _location[0];

  return (
    <main className="pl-4 pr-4 sm:pl-56 sm:pr-4 md:pl-80 lg:pl-96 md:pr-8 lg:pr-4 pt-[17rem] sm:pt-20 min-h-full">
      <h1 className="pb-5 text-3xl font-medium">{location.title}</h1>
      <section className="flex flex-col xl:flex-row gap-5">
        <div className="p-2">
          <Image
            src={location?.image || "/images/location-placeholder.jpg"}
            width={1500}
            height={1500}
            alt="location"
            className="max-h-[720px] object-cover rounded"
          />
          <hgroup className="p-1">
            <span className="flex items-center gap-1 break-keep">
              <MapPinIcon size={12} />
              {location.address}
            </span>
            <span className="mt-1 flex items-center gap-1 break-keep">
              <LocateFixedIcon size={12} />
              {location?.location}
            </span>
          </hgroup>
        </div>
        <div className="p-5 space-y-5">
          <InfoSection
            icon={<CalendarIcon />}
            title="이용기간"
            description={location.businessMonth}
          />
          <InfoSection
            icon={<ClockIcon />}
            title="운영시간"
            description={location.businessHours}
          />
          <InfoSection
            icon={<CircleDollarSignIcon />}
            title="가격"
            description={location.price}
          />
          <InfoSection
            icon={<PhoneIcon />}
            title="연락처"
            description={location.contact}
          />
          <Button className="py-6 w-full" asChild>
            <Link
              href={`/main?id=${location.id}`}
              className="flex items-center gap-2"
            >
              <MapIcon />
              지도에서 확인하기
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ListDetailPage;

interface InfoSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoSection = ({ icon, title, description }: InfoSectionProps) => {
  return (
    <div className="flex gap-3">
      {icon}
      <div>
        <h4 className="-mt-0.5 font-medium text-lg">{title}</h4>
        <p className="pl-2 mt-2 whitespace-pre-line text-base">{description}</p>
      </div>
    </div>
  );
};
