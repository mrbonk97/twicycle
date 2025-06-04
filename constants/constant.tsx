import { HomeIcon, MapPinIcon, VenetianMaskIcon } from "lucide-react";

export const MENU_LIST = [
  {
    id: "menu-1",
    title: "홈",
    url: "/",
    icon: <HomeIcon size={32} />,
  },
  {
    id: "menu-2",
    title: "목록",
    url: "/locations",
    icon: <MapPinIcon size={32} />,
  },
  {
    id: "menu-3",
    title: "신규제보하기",
    url: "/request",
    icon: <VenetianMaskIcon size={32} />,
  },
];

export const REGIONS = [
  { id: 1, region: "all", url: "/locations", title: "전체" },
  { id: 2, region: "seoul", url: "/locations?region=seoul", title: "서울" },
  {
    id: 3,
    region: "gyeonggi",
    url: "/locations?region=gyeonggi",
    title: "경기",
  },
  {
    id: 4,
    region: "incheon",
    url: "/locations?region=incheon",
    title: "인천",
  },
  {
    id: 5,
    region: "gang_won",
    url: "/locations?region=gang_won",
    title: "강원",
  },
  { id: 6, region: "jeju", url: "/locations?region=jeju", title: "제주" },
  {
    id: 7,
    region: "deajun",
    url: "/locations?region=deajun",
    title: "대전",
  },
  {
    id: 8,
    region: "chungbuk",
    url: "/locations?region=chungbuk",
    title: "충북",
  },
  {
    id: 9,
    region: "chungnam",
    url: "/locations?region=chungnam",
    title: "충남/세종",
  },
  {
    id: 10,
    region: "busan",
    url: "/locations?region=busan",
    title: "부산",
  },
  {
    id: 11,
    region: "ulsan",
    url: "/locations?region=ulsan",
    title: "울산",
  },
  {
    id: 12,
    region: "gyeongnam",
    url: "/locations?region=gyeongnam",
    title: "경남",
  },
  {
    id: 13,
    region: "daegu",
    url: "/locations?region=daegu",
    title: "대구",
  },
  {
    id: 14,
    region: "jeonnam",
    url: "/locations?region=jeonnam",
    title: "전남",
  },
  {
    id: 15,
    region: "jeonju",
    url: "/locations?region=jeonju",
    title: "전주/전북",
  },
];
