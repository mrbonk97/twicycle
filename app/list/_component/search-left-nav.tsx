"use client";
import { REGIONS } from "@/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const SearchLeftnav = () => {
  const filter = useSearchParams().get("region");

  return (
    <aside className="fixed hidden sm:block z-20 left-0 lg:left-20 h-full w-52 md:w-72 border-r bg-background overflow-y-auto">
      <div className="w-full h-16 flex items-center justify-center bg-secondary border-b">
        지역별 메뉴
      </div>
      <nav className="w-full space-y-2">
        {REGIONS.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="block py-2 px-4 w-full hover:bg-secondary/50 duration-150 aria-selected:bg-secondary"
            aria-selected={
              filter == item.region || (!filter && item.region == "all")
            }
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import { Dispatch, SetStateAction } from "react";
// import { REGIONS } from "@/constants";

// interface SearchLeftnavProps {
//   selectedRegion: string;
//   setSelectedRegion: Dispatch<SetStateAction<string>>;
// }

// export const SearchLeftnav = ({
//   selectedRegion,
//   setSelectedRegion,
// }: SearchLeftnavProps) => {
//   return (
//     <aside className="fixed hidden sm:block z-20 left-0 lg:left-20 h-full w-52 md:w-72 border-r bg-background overflow-y-auto">
//       <div className="w-full h-16 flex items-center justify-center bg-secondary border-b">
//         지역별 메뉴
//       </div>
//       <ToggleGroup
//         type="single"
//         className="flex flex-col"
//         value={selectedRegion}
//         onValueChange={(region) => {
//           if (region) setSelectedRegion(region);
//         }}
//       >
//         <ToggleGroupItem value={"all"} className="w-full rounded-none">
//           전체
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"seoul"} className="w-full rounded-none">
//           서울
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"gyeonggi"} className="w-full rounded-none">
//           경기
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"incheon"} className="w-full rounded-none">
//           인천
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"gang_won"} className="w-full rounded-none">
//           강원
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"jeju"} className="w-full rounded-none">
//           제주
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"deajun"} className="w-full rounded-none">
//           대전
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"chungbuk"} className="w-full rounded-none">
//           충북
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"chungnam"} className="w-full rounded-none">
//           세종
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"busan"} className="w-full rounded-none">
//           부산
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"ulsan"} className="w-full rounded-none">
//           울산
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"gyeongnam"} className="w-full rounded-none">
//           경남
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"daegu"} className="w-full rounded-none">
//           대구
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"jeonnam"} className="w-full rounded-none">
//           전남
//         </ToggleGroupItem>
//         <ToggleGroupItem value={"jeonju"} className="w-full rounded-none">
//           전북
//         </ToggleGroupItem>
//       </ToggleGroup>
//     </aside>
//   );
// };
