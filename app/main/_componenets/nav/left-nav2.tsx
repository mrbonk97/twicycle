"use client";
import { LocationCard } from "./location-card";
import { useState } from "react";
import { LocationInfoModal } from "./location-info-modal";
import { Logo } from "@/components/logo";
import { RENTAL_LOCATION } from "@/constants";

export const Leftnav2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [location, setLocation] = useState<(typeof RENTAL_LOCATION)[0] | null>(
    null
  );

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
      setLocation(null);
    }, 500);
  };

  return (
    <>
      <aside className="fixed left-20 z-20 h-full w-96 bg-background border-r overflow-y-auto">
        <div className="w-full h-24 bg-blue-50 flex items-center justify-center border-b">
          <Logo />
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
      </aside>
      <LocationInfoModal
        title={location?.title}
        imageUrl={location?.image}
        address={location?.address}
        businessHours={location?.businessHours}
        businessMonth={location?.businessMonth}
        contact={location?.contact}
        location={location?.location}
        price={location?.price}
        isOpen={isOpen}
        isClosing={isClosing}
        handleClose={handleClose}
      />
    </>
  );
};
