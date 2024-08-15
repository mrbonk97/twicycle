"use client";
import {
  ArrowLeftToLine,
  ArrowRightToLine,
  LucideChevronLeft,
  LucideChevronsLeft,
  LucideChevronsRight,
} from "lucide-react";
import { LocationCard } from "./location-card";
import { LocationInfoModal } from "./location-info-modal";
import { Logo } from "@/components/logo";
import { RENTAL_LOCATION } from "@/constants";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Leftnav2 = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <>
      <aside
        className={`fixed z-20 left-0 lg:left-20 hidden md:block pb-10 h-full w-80 lg:w-96 bg-primary-foreground border-r overflow-y-auto duration-500
          ${isMinimized && "-translate-x-[17rem] lg:-translate-x-80"}`}
      >
        <div className="px-2 h-24 bg-secondary flex items-center justify-between border-b">
          <div />
          <Logo />
          <Button
            size={"icon"}
            variant={"secondary"}
            onClick={() => {
              console.log("희흰 ");
              setIsMinimized((cur) => !cur);
            }}
          >
            <ArrowRightToLine
              className={`opacity-80 ${!isMinimized && "hidden"}`}
            />
            <ArrowLeftToLine
              className={`opacity-80 ${isMinimized && "hidden"}`}
            />
          </Button>
        </div>
        <ul>
          {RENTAL_LOCATION.map((item) => (
            <LocationCard key={item.id} props={item} />
          ))}
        </ul>
      </aside>
    </>
  );
};
