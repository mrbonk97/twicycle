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

export const LocationInfoModal = () => {
  const modalSlice = createSelectors(useBoundStore);
  const isOpen = modalSlice.use.isOpen();
  const isOpening = modalSlice.use.isOpening();
  const isClosing = modalSlice.use.isClosing();
  const handleClose = modalSlice.use.handleClose();
  const content = modalSlice.use.content();

  if (!isOpen) return null;

  // sm:top-[5%] min-h-96 lg:min-h-[650px]
  // ${isClosing && "sm:left-0 top-full"}
  // ${isOpening && "sm:left-[470px] top-[5%]"}
  return (
    <Card
      className={`fixed z-10 top-20 left-5 md:left-[21rem] md:w-[calc(100%-22.25rem)] lg:left-[30rem] lg:w-[500px] h-[calc(100%-6.5rem)] w-[calc(100%-40px)] overflow-y-auto duration-500 
      
      `}
    >
      <CardHeader>
        <CardTitle>{content?.title}</CardTitle>
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
            {content?.address}
          </span>
          <span className="mt-1 flex items-center gap-1 break-keep">
            <LocateFixedIcon size={12} />
            {content?.location}
          </span>
        </hgroup>
        <div className="mt-5 flex gap-3">
          <CalendarIcon />
          <div>
            <h4 className="-mt-0.5 font-medium">이용기간</h4>
            <p className="pl-2 mt-2 text-xs whitespace-pre-line">
              {content?.businessMonth}
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <ClockIcon />
          <div>
            <h4 className="-mt-0.5 font-medium">운영시간</h4>
            <p className="pl-2 mt-2 text-xs whitespace-pre-line">
              {content?.businessHours}
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <CircleDollarSignIcon />
          <div>
            <h4 className="-mt-0.5 font-medium">가격</h4>
            <p className="pl-2 mt-2 text-xs whitespace-pre-line">
              {content?.price}
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <PhoneIcon />
          <div>
            <h4 className="-mt-0.5 font-medium">연락처</h4>
            <p className="pl-2 mt-2 text-xs whitespace-pre-line">
              {content?.contact}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
