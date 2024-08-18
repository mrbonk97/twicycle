import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CalendarIcon,
  CircleDollarSignIcon,
  ClockIcon,
  LocateFixedIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";

interface LocationDetailModalProps {
  children: React.ReactNode;
  title: string;
  address: string;
  location: string;
  lat: number;
  lng: number;
  imageUrl: string | null;
  businessMonth: string;
  businessHours: string;
  price: string;
  contact: string;
}
export const LocationDetailModal = ({
  children,
  title,
  address,
  location,
  lat,
  lng,
  imageUrl,
  businessMonth,
  businessHours,
  price,
  contact,
}: LocationDetailModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <Image
          src={imageUrl || "/images/location-placeholder.jpg"}
          width={400}
          height={400}
          alt="location"
          className="w-full h-52 object-cover overflow-hidden border rounded-lg"
        />
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
      </DialogContent>
    </Dialog>
  );
};
