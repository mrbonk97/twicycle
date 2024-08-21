"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useBoundStore } from "@/stores/bound-store";
import { createSelectors } from "@/stores/create-selector";
import {
  CalendarIcon,
  CircleDollarSignIcon,
  ClockIcon,
  LocateFixedIcon,
  MapPinIcon,
  PhoneIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const LocationInfoModal = () => {
  const [isTotallyClosed, setIsTotallyClosed] = useState(false);
  const useStore = createSelectors(useBoundStore);
  const isOpen = useStore.use.isOpen();
  const handleClose = useStore.use.handleClose();
  const content = useStore.use.content();
  const isMinimized = useStore.use.isMinimized();

  if (!content) return null;

  return (
    <Card
      className={`fixed z-[102] md:z-10 w-[calc(100%-40px)] md:w-[calc(100%-22.25rem)] lg:w-[500px] h-[calc(100%-6.5rem)] overflow-y-auto duration-500 
      ${
        isOpen &&
        !isMinimized &&
        "left-5 top-20 md:left-[21rem] lg:left-[30rem]"
      }
      ${
        !isOpen &&
        !isMinimized &&
        "left-5 top-full md:top-20 md:-left-96 lg:-left-10"
      }
      ${isOpen && isMinimized && "left-5 top-20 md:left-[4rem] lg:left-[10rem]"}
      ${
        !isOpen &&
        isMinimized &&
        "left-5 top-full md:left-[4rem] lg:left-[10rem]"
      }
      `}
    >
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
        <button onClick={handleClose} className="absolute top-1 right-1">
          <XIcon className="w-10 aspect-square" />
        </button>
      </CardHeader>
      <CardContent className="w-full">
        <Image
          src={content?.image || "/images/location-placeholder.jpg"}
          width={400}
          height={400}
          alt="location"
          className="w-full h-52 object-cover overflow-hidden border rounded-lg"
        />
        <Separator className="my-5 w-full" />
        <hgroup>
          <span className="flex items-center gap-1 break-keep">
            <MapPinIcon size={12} />
            {content.address}
          </span>
          <span className="mt-1 flex items-center gap-1 break-keep">
            <LocateFixedIcon size={12} />
            {content?.location}
          </span>
        </hgroup>
        <section className="mt-5 space-y-5">
          <InfoSection
            icon={<CalendarIcon />}
            title="이용기간"
            description={content.businessMonth}
          />
          <InfoSection
            icon={<ClockIcon />}
            title="운영시간"
            description={content.businessHours}
          />
          <InfoSection
            icon={<CircleDollarSignIcon />}
            title="가격"
            description={content.price}
          />
          <InfoSection
            icon={<PhoneIcon />}
            title="연락처"
            description={content.contact}
          />
        </section>
      </CardContent>
    </Card>
  );
};

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
        <h4 className="-mt-0.5 font-medium">{title}</h4>
        <p className="pl-2 mt-2 text-xs whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};
