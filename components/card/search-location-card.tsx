"use client";
import { createSelectors } from "@/stores/create-selector";
import { useNaverMapStoreBase } from "@/stores/useNaverStoreBase";
import { ChevronRight, LocateFixedIcon, MapPinIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

interface SearchLocationCardProps {
  title: string;
  address: string;
  location: string;
  lat: number;
  lng: number;
  imageUrl: string | null;
}

export const SearchLocationCard = ({
  title,
  address,
  location,
  lat,
  lng,
  imageUrl,
}: SearchLocationCardProps) => {
  const useNaverStore = createSelectors(useNaverMapStoreBase);
  const naverMap = useNaverStore.use.naverMap();

  return (
    <li>
      <Card
        className="h-96 w-96 border cursor-pointer group duration-150
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
          <div className="text-sm flex items-center gap-1 break-keep">
            <MapPinIcon size={12} />
            {address}
          </div>
          <div className="mt-1 text-xs flex items-center gap-1 break-keep">
            <LocateFixedIcon size={12} />
            {location}
          </div>
        </CardContent>
      </Card>
    </li>
  );
};
