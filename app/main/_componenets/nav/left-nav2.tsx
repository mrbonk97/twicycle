"use client";
import { RENTAL_LOCATION } from "@/constants";
import { LocationCard } from "./location-card";
import { useState } from "react";
import { LocationInfoModal } from "./left-nav3";

export const Leftnav2 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [location, setLocation] = useState<(typeof RENTAL_LOCATION)[0] | null>(
    null
  );

  return (
    <aside className="h-full w-96 bg-background border-r overflow-y-auto">
      <div className="w-full h-24 bg-blue-300 flex items-center justify-center">
        깔깔깔
      </div>
      <ul>
        {RENTAL_LOCATION.map((item) => (
          <LocationCard
            key={item.id}
            address={item.address}
            location={item.location}
            title={item.title}
            lat={item.lat}
            lng={item.lng}
            isFocused={item.id == location?.id}
            onOpen={() => {
              setIsOpen(true);
              setLocation(item);
            }}
          />
        ))}
      </ul>
      <LocationInfoModal
        title={location?.title}
        address={location?.address}
        businessHours={location?.businessHours}
        businessMonth={location?.businessMonth}
        contact={location?.contact}
        location={location?.location}
        price={location?.price}
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
          setLocation(null);
        }}
      />
    </aside>
  );
};
