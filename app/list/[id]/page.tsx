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
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const _product = RENTAL_LOCATION.filter((item) => item.id);
  if (_product.length == 0) throw "대여점을 찾을 수 없음";
  const product = _product[0];

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "2인거: " + product.title,
    description: "대여점: " + product.title,
    openGraph: {
      title: "2인거",
      description: "대여점: " + product.title,
      images: product.image
        ? [product.image, ...previousImages]
        : previousImages,
    },
    twitter: {
      title: "2인거",
      description: "대여점: " + product.title,
      images: product.image
        ? [product.image, ...previousImages]
        : previousImages,
    },
  };
}

const ListDetailPage = ({ params }: { params: { id: number } }) => {
  const _location = RENTAL_LOCATION.filter((item) => item.id == params.id);
  if (_location.length == 0) throw "대여점을 찾을 수 없음";
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
            className="max-h-[700px] object-cover rounded"
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
        <div className="p-5 flex flex-col justify-between gap-5">
          <div className="space-y-2">
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
          </div>
          <Button className="w-full" asChild>
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
      <span className="text-blue-400">{icon}</span>
      <div>
        <h4 className="-mt-0.5 font-medium text-lg">{title}</h4>
        <p className="pl-2 mt-2 whitespace-pre-line text-sm">{description}</p>
      </div>
    </div>
  );
};
