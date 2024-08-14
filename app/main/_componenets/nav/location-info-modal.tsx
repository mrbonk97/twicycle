import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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

interface LocationInfoModalProps {
  title?: string;
  imageUrl?: string | null;
  address?: string;
  location?: string;
  businessMonth?: string;
  businessHours?: string;
  price?: string;
  contact?: string;
  isOpen: boolean;
  isClosing: boolean;
  handleClose: () => void;
}

export const LocationInfoModal = ({
  title,
  imageUrl,
  address,
  location,
  businessMonth,
  businessHours,
  price,
  contact,
  isOpen,
  isClosing,
  handleClose,
}: LocationInfoModalProps) => {
  if (!isOpen) return null;

  return (
    <Card
      className={`absolute z-10 top-[5%] h-[90%] w-96 rounded-lg flex flex-col duration-500 items-center border-r 
        ${isClosing ? "left-0" : "left-[500px]"}
      `}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <button onClick={handleClose} className="absolute top-1 right-1">
          <XIcon className="w-10 aspect-square" />
        </button>
      </CardHeader>
      <CardContent className="w-full">
        <Image
          src={imageUrl || "/images/location-placeholder.jpg"}
          width={400}
          height={400}
          alt="location"
          className="w-full h-52 object-cover overflow-hidden border rounded-lg"
        />
        <Separator className="my-5 w-full" />
        <hgroup>
          <span className="flex items-center gap-1 break-keep">
            <MapPinIcon size={12} />
            {address}
          </span>
          <span className="mt-1 flex items-center gap-1 break-keep">
            <LocateFixedIcon size={12} />
            {location}
          </span>
        </hgroup>
        <div className="mt-5 flex gap-3">
          <CalendarIcon />
          <div>
            <h4 className="-mt-0.5 font-medium">이용기간</h4>
            <p className="pl-2 mt-2 text-xs whitespace-pre-line">
              {businessMonth}
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <ClockIcon />
          <div>
            <h4 className="-mt-0.5 font-medium">운영시간</h4>
            <p className="pl-2 mt-2 text-xs whitespace-pre-line">
              {businessHours}
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <CircleDollarSignIcon />
          <div>
            <h4 className="-mt-0.5 font-medium">가격</h4>
            <p className="pl-2 mt-2 text-xs whitespace-pre-line">{price}</p>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <PhoneIcon />
          <div>
            <h4 className="-mt-0.5 font-medium">연락처</h4>
            <p className="pl-2 mt-2 text-xs whitespace-pre-line">{contact}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
