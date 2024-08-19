import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LocateFixedIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SearchLocationCardProps {
  id: number;
  title: string;
  address: string;
  location: string;
  lat: number;
  lng: number;
  imageUrl: string | null;
}

export const SearchLocationCard = ({
  id,
  title,
  address,
  location,
  lat,
  lng,
  imageUrl,
}: SearchLocationCardProps) => {
  return (
    <li>
      <Link href={`/list/${id}`}>
        <Card
          className="w-80 sm:h-96 sm:w-96 cursor-pointer group duration-150
        hover:bg-blue-50/20"
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>영업중</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={imageUrl || "/images/location-placeholder.jpg"}
              width={400}
              height={400}
              alt="location"
              className="w-full h-52 object-cover overflow-hidden border rounded-lg"
            />
            <div className="mt-2 text-sm flex items-center gap-1 break-keep">
              <MapPinIcon size={12} />
              {address}
            </div>
            <div className="mt-1 text-xs flex items-center gap-1 break-keep">
              <LocateFixedIcon size={12} />
              {location}
            </div>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
};
