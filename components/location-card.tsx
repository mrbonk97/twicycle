import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LocationType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

interface Props {
  loc: LocationType;
}

export const LocationCard = ({ loc }: Props) => {
  const { id, title, image, address, location } = loc;

  return (
    <li>
      <Link href={`/locations/${id}`}>
        <Card className="w-80 sm:w-96 cursor-pointer group duration-150 hover:bg-secondary/80">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={image || "/images/location-placeholder.jpg"}
              width={512}
              height={512}
              alt="location"
              className="h-52 object-cover border rounded-lg"
            />
          </CardContent>
          <CardFooter className="block">
            <p className="text-center font-medium break-keep">{address}</p>
            <p className="mt-1 text-center text-xs opacity-80">{location}</p>
          </CardFooter>
        </Card>
      </Link>
    </li>
  );
};
