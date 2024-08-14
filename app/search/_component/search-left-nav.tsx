"use client";
import { RegionCard } from "@/components/card/region-card";
import { REGION } from "@/constants";
import { Dispatch, SetStateAction } from "react";

interface SearchLeftnavProps {
  selectedRow: (typeof REGION)[0];
  setSelectedRow: Dispatch<SetStateAction<(typeof REGION)[0]>>;
}

export const SearchLeftnav = ({
  selectedRow,
  setSelectedRow,
}: SearchLeftnavProps) => {
  return (
    <aside className="fixed z-20 left-20 h-full w-96 border-r bg-primary-foreground/50 overflow-y-auto">
      <div className="w-full h-20 flex items-center justify-center bg-primary-foreground border-b">
        지역별 메뉴
      </div>
      <ul>
        {REGION.map((item) => (
          <RegionCard
            key={item.id}
            title={item.title}
            isSelected={selectedRow?.id == item.id}
            onClick={() => setSelectedRow(item)}
          />
        ))}
      </ul>
    </aside>
  );
};
