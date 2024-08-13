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

interface LocationInfoModalProps {
  title?: string;
  address?: string;
  location?: string;
  businessMonth?: string;
  businessHours?: string;
  price?: string;
  contact?: string;
  isOpen: boolean;
  handleClose: () => void;
}

export const LocationInfoModal = ({
  title,
  address,
  location,
  businessMonth,
  businessHours,
  price,
  contact,
  isOpen,
  handleClose,
}: LocationInfoModalProps) => {
  return (
    <Card
      className={`z-20 absolute left-[400px] top-[5%] h-[90%] w-96 rounded-lg flex flex-col items-center border-r ${
        !isOpen && "hidden"
      }`}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <button onClick={handleClose} className="absolute top-1 right-1">
          <XIcon className="w-10 aspect-square" />
        </button>
      </CardHeader>
      <CardContent className="w-full">
        <div id="road-map" className="w-full h-52 bg-blue-200" />
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
