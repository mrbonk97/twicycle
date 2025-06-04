import Image from "next/image";
import { LocationType } from "@/types/type";
import { X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  location: LocationType;
  isMinimized: boolean;
  close: () => void;
}

export const LocationModal = ({ location, isMinimized, close }: Props) => {
  return (
    <Card
      className={`fixed z-[102] md:z-10 top-20 md:top-5 left-5 right-5 md:right-auto bottom-5 md:w-[450px] overflow-y-auto !duration-500 
            ${isMinimized ? "md:left-[11.25rem]" : "md:left-[30.25rem]"}`}
    >
      <CardHeader>
        <CardTitle>{location.title}</CardTitle>
      </CardHeader>
      <button onClick={close} className="absolute right-2 top-3 hover:bg-secondary rounded-lg p-2">
        <X />
      </button>
      <CardContent className="mt-5">
        <Image
          src={location.image || "/images/location-placeholder.jpg"}
          alt={location.title}
          height={288}
          width={450}
          className="mx-auto h-72 object-cover rounded-xl"
        />
        <section className="mt-5 py-5 border-y text-md font-medium">
          <p className="text-center">{location.address}</p>
          <p className="mt-1 text-center">{location.location}</p>
        </section>
        <section className="text-md">
          <h4 className="p-2 font-medium">운영시간</h4>
          <p className="p-2 text-xs">{location.businessHours}</p>
        </section>
        <section className="mt-5 border-t text-md">
          <h4 className="p-2 font-medium">가격</h4>
          <p className="p-2 text-xs">{location.price}</p>
        </section>
        <section className="mt-5 border-t text-md">
          <h4 className="p-2 font-medium">연락처</h4>
          <p className="p-2 text-xs">{location.contact}</p>
        </section>
      </CardContent>
    </Card>
  );
};
