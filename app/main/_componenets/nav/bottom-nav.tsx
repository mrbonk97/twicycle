"use client";

import { TouchEvent, useEffect, useRef, useState } from "react";
import { RENTAL_LOCATION } from "@/constants";
import { LocationCard } from "./location-card";
import { BirdIcon } from "lucide-react";

interface LeftnavProps {
  locationList: typeof RENTAL_LOCATION;
}

export function Bottomnav({ locationList }: LeftnavProps) {
  const [screenY, setScreenY] = useState({
    height: 0,
    height80p: 0,
    height30p: 0,
  });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    ref.current!.style.transitionDuration = "0ms";
  };

  const handleTouch = (e: TouchEvent<HTMLDivElement>) => {
    const height = screenY.height - e.touches[0].clientY;
    ref.current!.style.height = height + "px";
    if (height > screenY.height80p)
      ref.current!.style.height = screenY.height80p + "px";
    if (height < 32) ref.current!.style.height = "32px";
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (ref.current) {
      const height = parseInt(ref.current.style.height, 10);
      if (height < screenY.height30p) ref.current.style.height = "32px";
      else ref.current.style.height = "80%";
      ref.current!.style.transitionDuration = "500ms";
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    setScreenY({
      height: window.innerHeight,
      height30p: window.innerHeight * 0.3,
      height80p: window.innerHeight * 0.8,
    });
    if (!open) ref.current.style.height = "32px";
    if (open) ref.current.style.height = "80%";
  }, [open, ref]);

  return (
    <div
      ref={ref}
      role="button"
      className="fixed h-8 z-[101] bottom-0 md:hidden w-full bg-background rounded-t-2xl overflow-hidden border-t border-l border-r duration-500 touch-none"
    >
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouch}
        onTouchEnd={handleTouchEnd}
        onClick={() => setOpen((cur) => !cur)}
        className="h-8 w-full flex2"
      >
        <div className="h-2 w-20 rounded-full bg-zinc-500" />
      </div>
      <ul className="h-[calc(100%-2.5rem)] overflow-y-auto">
        {locationList.map((item) => (
          <LocationCard key={item.id} props={item} />
        ))}
        {locationList.length == 0 && (
          <li
            onClick={(e) => e.stopPropagation()}
            className="p-3 pr-5 h-32 w-full flex2 gap-5 border-b duration-150 hover:bg-secondary/50"
          >
            <BirdIcon className="text-blue-400" />
            <span>일치하는 항목이 없습니다.</span>
          </li>
        )}
      </ul>
    </div>
  );
}

{
  /* <div
className={clsx("p-4 pt-5", {
  "overflow-y-auto": snap === 1,
  "overflow-hidden": snap !== 1,
})}
>
<div className="w-20 h-2 rounded-full bg-zinc-500" />
</div> */
}
