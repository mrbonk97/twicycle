import { BikeIcon, HomeIcon, MapPinIcon, VenetianMaskIcon } from "lucide-react";

export const RENTAL_LOCATION = [
  {
    id: 1,
    region: "seoul",
    title: "강서 자전거대여점",
    status: "운영중",
    gubun: "위탁시설",
    address: "강서구 방화동 18-1",
    location: "방화대교 남단 밑 하류 방향",
    lat: 37.5850113953,
    lng: 126.8205125895,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장\n금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n강서안내센터 02-3780-0621~3\n시민활동지원과 02-3780-0772",
    image: null,
  },
  {
    id: 2,
    region: "seoul",
    title: "광나루 자전거대여점",
    status: "운영중",
    gubun: "위탁시설",
    address: "강동구 천호동 483-8",
    location: "광나루 자전거공원 안전교육장 인근",
    lat: 37.5448895138,
    lng: 127.1194319517,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장 금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n강서안내센터 02-3780-0501~4\n시민활동지원과 02-3780-0772",
    image: null,
  },
  {
    id: 3,
    region: "seoul",
    title: "난지 자전거대여점",
    status: "운영중",
    gubun: "위탁시설",
    address: "마포구 상암동 487-141",
    location: "월드컵대교 북단 하부",
    lat: 37.5608806721,
    lng: 126.8881879387,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장 금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n난지안내센터 02-3780-0611~3\n시민활동지원과 02-3780-0772",
    image: "/images/location/난지_자전거대여점_20240620_174232.jpg",
  },
  {
    id: 4,
    region: "seoul",
    title: "뚝섬 자전거대여점",
    status: "운영중",
    gubun: "위탁시설",
    address: "광진구 자양동 97-5",
    location: "청담대교 북단(7호선 뚝섬유원지역 2번 출구)",
    lat: 37.5305557961,
    lng: 127.0663795625,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장 금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n뚝섬안내센터 02-3780-0521~4\n시민활동지원과 02-3780-0772",
    image: "/images/location/뚝섬자전거대여점_20230426_124520.jpg",
  },
  {
    id: 5,
    region: "seoul",
    title: "반포 자전거대여점",
    status: "운영중",
    gubun: "위탁시설",
    address: "서초구 잠원동 122-2",
    location: "반포나들목 앞(반포제1주차장 부근)",
    lat: 37.5121196449,
    lng: 127.0018804189,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장 금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n반포안내센터 02-3780-0541~4\n시민활동지원과 02-3780-0772",
    image: "/images/location/반포_자전거대여점_20230523_161111.jpg",
  },
  {
    id: 6,
    region: "seoul",
    title: "양화 자전거대여점",
    status: "운영중",
    gubun: "위탁시설",
    address: "영등포구 당산동 95-1",
    location: "양화제1주차장 옆(1호매점 부근)",
    lat: 37.5371556121,
    lng: 126.9040948801,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장 금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n양화안내센터 02-3780-0581~3\n시민활동지원과 02-3780-0772",
    image: null,
  },
  {
    id: 7,
    region: "seoul",
    title: "여의도 자전거대여점(마포대교점)",
    status: "운영중",
    gubun: "위탁시설",
    address: "영등포구 여의도동 84",
    location: "마포대교 남단 하류 물빛광장 앞",
    lat: 37.5300977149,
    lng: 126.9283572364,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장 금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n여의도안내센터 02-3780-0561~6\n시민활동지원과 02-3780-0772",
    image: "/images/location/여의도_자전거대여_마포점_20230615_162837.jpg",
  },
  {
    id: 8,
    region: "seoul",
    title: "여의도 자전거대여점(여의나루점)",
    status: "운영중",
    gubun: "위탁시설",
    address: "영등포구 여의도동 85-6",
    location: "여의나루역 2번출구 밑",
    lat: 37.5277427227,
    lng: 126.9341631331,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장 금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n여의도안내센터 02-3780-0561~6\n시민활동지원과 02-3780-0772",
    image: "/images/location/여의도_자전거대여_여의나루점_20230615_151326.jpg",
  },
  {
    id: 9,
    region: "seoul",
    title: "여의도 자전거대여점(원효대교점)",
    status: "운영중",
    gubun: "위탁시설",
    address: "영등포구 여의도동 85",
    location: "원효대교 남단 하류(여의도나들목 앞)",
    lat: 37.5247191255,
    lng: 126.9369430558,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장 금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n여의도안내센터 02-3780-0561~6\n시민활동지원과 02-3780-0772",
    image: "/images/location/여의도_자전거대여_원효대교점_20230615_105146.jpg",
  },
  {
    id: 10,
    region: "seoul",
    title: "이촌 자전거대여점",
    status: "운영중",
    gubun: "위탁시설",
    address: "용산구 이촌로72길 6-2",
    location: "이촌제2주차장(거북선나루터) 앞",
    lat: 37.5170284628,
    lng: 126.9695663253,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장 금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n이촌안내센터 02-3780-0551~4\n시민활동지원과 02-3780-0772",
    image: "/images/location/이촌 자전거대여점_20221118_093541.jpg",
  },
  {
    id: 11,
    region: "seoul",
    title: "잠실 자전거대여점",
    status: "운영중",
    gubun: "위탁시설",
    address: "송파구 잠실동 1-1",
    location: "잠실선착장(제3주차장) 앞",
    lat: 37.5179184744,
    lng: 127.0819473549,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장 금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n잠실안내센터 02-3780-0511~4\n시민활동지원과 02-3780-0772",
    image: "/images/location/잠실_자전거대여점_20240613_171445.jpg",
  },
  {
    id: 12,
    region: "seoul",
    title: "잠원 자전거대여점",
    status: "운영중",
    gubun: "위탁시설",
    address: "강남구 압구정동 386",
    location: "제3주차장(잠원2호매점) 옆",
    lat: 37.5265884769,
    lng: 127.0174813741,
    businessMonth: "3~10월. 11월은 금~일요일만 운영",
    businessHours:
      "월~목요일 (3~10월) 10시~20시 / (11~2월) 휴장 금~일요일 (3~11월) 10시~20시 / (12~2월) 휴장",
    price:
      "유료\n* 요금은 1시간 / 1시간 반 / 2시간 기준 순으로 기재\n\n1인용·아동용(일반) - 3,000원 / 4,500원 / 6,000원\n2인용 - 6,000원 / 9,000원 / 12,000원\n유아동승 - 5,000원 / 7,500원 / 10,000원\n고급(아동) - 6,000원 / 9,000원 / 12,000원\n고급(일반) - 7,000원 / 10,500원 / 14,000원",
    contact:
      "운영업체 010-4423-9880 (㈜타고)\n잠원안내센터 02-3780-0531~3\n시민활동지원과 02-3780-0772",
    image: null,
  },
];

export const MENU_LIST = [
  {
    id: "menu1",
    title: "홈",
    url: "/main",
    icon: <HomeIcon size={32} />,
  },
  {
    id: "menu2",
    title: "목록",
    url: "/list",
    icon: <MapPinIcon size={32} />,
  },
  {
    id: "menu3",
    title: "신규제보하기",
    url: "/request",
    icon: <VenetianMaskIcon size={32} />,
  },
  {
    id: "menu4",
    title: "첫화면",
    url: "/",
    icon: <BikeIcon size={32} />,
  },
];

export const MENU_LIST2 = [
  {
    id: "menu1",
    region: "seoul",
    title: "홈",
    url: "/main",
    icon: <HomeIcon size={24} />,
  },
  {
    id: "menu2",
    region: "seoul",
    title: "검색",
    url: "/list",
    icon: <MapPinIcon size={24} />,
  },
];

export const REGIONS = [
  { id: 1, region: "all", url: "/list", title: "전체" },
  { id: 2, region: "seoul", url: "/list?region=seoul", title: "서울" },
  {
    id: 3,
    region: "gyeonggi",
    url: "/list?region=gyeonggi",
    title: "경기",
  },
  {
    id: 4,
    region: "incheon",
    url: "/list?region=incheon",
    title: "인천",
  },
  {
    id: 5,
    region: "gang_won",
    url: "/list?region=gang_won",
    title: "강원",
  },
  { id: 6, region: "jeju", url: "/list?region=jeju", title: "제주" },
  {
    id: 7,
    region: "deajun",
    url: "/list?region=deajun",
    title: "대전",
  },
  {
    id: 8,
    region: "chungbuk",
    url: "/list?region=chungbuk",
    title: "충북",
  },
  {
    id: 9,
    region: "chungnam",
    url: "/list?region=chungnam",
    title: "충남/세종",
  },
  {
    id: 10,
    region: "busan",
    url: "/list?region=busan",
    title: "부산",
  },
  {
    id: 11,
    region: "ulsan",
    url: "/list?region=ulsan",
    title: "울산",
  },
  {
    id: 12,
    region: "gyeongnam",
    url: "/list?region=gyeongnam",
    title: "경남",
  },
  {
    id: 13,
    region: "daegu",
    url: "/list?region=daegu",
    title: "대구",
  },
  {
    id: 14,
    region: "jeonnam",
    url: "/list?region=jeonnam",
    title: "전남",
  },
  {
    id: 15,
    region: "jeonju",
    url: "/list?region=jeonju",
    title: "전주/전북",
  },
];
