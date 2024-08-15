import { Dispatch, SetStateAction } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Topnav2Props {
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
}

export const Topnav2 = ({
  selectedRegion,
  setSelectedRegion,
}: Topnav2Props) => {
  return (
    <header className="fixed sm:hidden top-16 left-0 py-2 px-5 w-full bg-primary-foreground border-b">
      <ToggleGroup
        type="single"
        className="w-full gap-x-3 gap-y-2 flex items-center flex-wrap"
        value={selectedRegion}
        onValueChange={(region) => {
          if (region) setSelectedRegion(region);
        }}
      >
        <ToggleGroupItem value={"all"}>전체</ToggleGroupItem>
        <ToggleGroupItem value={"seoul"}>서울</ToggleGroupItem>
        <ToggleGroupItem value={"gyeonggi"}>경기</ToggleGroupItem>
        <ToggleGroupItem value={"incheon"}>인천</ToggleGroupItem>
        <ToggleGroupItem value={"gang_won"}>강원</ToggleGroupItem>
        <ToggleGroupItem value={"jeju"}>제주</ToggleGroupItem>
        <ToggleGroupItem value={"deajun"}>대전</ToggleGroupItem>
        <ToggleGroupItem value={"chungbuk"}>충북</ToggleGroupItem>
        <ToggleGroupItem value={"chungnam"}>세종</ToggleGroupItem>
        <ToggleGroupItem value={"busan"}>부산</ToggleGroupItem>
        <ToggleGroupItem value={"ulsan"}>울산</ToggleGroupItem>
        <ToggleGroupItem value={"gyeongnam"}>경남</ToggleGroupItem>
        <ToggleGroupItem value={"daegu"}>대구</ToggleGroupItem>
        <ToggleGroupItem value={"jeonnam"}>전남</ToggleGroupItem>
        <ToggleGroupItem value={"jeonju"}>전북</ToggleGroupItem>
      </ToggleGroup>
    </header>
  );
};
