// "use client";

// import Link from "next/link";
// import { FormEvent } from "react";
// import { LocationType } from "@/types/type";
// import { Logo } from "@/components/logo";
// import {
//   ArrowLeftToLine,
//   ArrowRightToLine,
//   ChevronRight,
//   LocateFixedIcon,
//   MapPinIcon,
//   SearchIcon,
// } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { NonExistList } from "../none-exist-list";

// interface Props {
//   curQ: string | undefined;
//   location: LocationType | undefined;
//   locations: LocationType[];
//   isMinimized: boolean;
//   handleOpen: (l: LocationType) => void;
//   handleMinimize: () => void;
// }

// export const LeftSearchNav = ({
//   curQ,
//   location,
//   locations,
//   isMinimized,
//   handleOpen,
//   handleMinimize,
// }: Props) => {
//   const router = useRouter();

//   const handleSearch = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const q = formData.get("q")?.toString().trim();
//     const encodedQ = q ? encodeURIComponent(q) : "";
//     router.push(encodedQ ? `/?q=${encodedQ}` : "/");
//   };

//   return (
//     <aside
//       className={`hidden sm:block z-20 fixed top-0 h-full w-96 bg-background border-r !duration-500 overflow-y-auto
//         ${isMinimized ? "-left-56" : "left-20"}`}
//     >
//       <div className="p-5 flex2 border-b bg-secondary relative">
//         <Logo />
//         <button
//           className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-background"
//           onClick={handleMinimize}
//         >
//           {isMinimized ? <ArrowRightToLine /> : <ArrowLeftToLine />}
//         </button>
//       </div>

//       <form className="relative border-b" onSubmit={handleSearch}>
//         <button type="submit" className="absolute top-1/2 left-4 -translate-y-1/2 pr-2 border-r">
//           <SearchIcon size={16} />
//         </button>
//         <input name="q" className="pl-12 h-12 w-full" placeholder="검색" />
//       </form>

//       <ul>
//         {locations.length == 0 && <NonExistList />}

//         {locations.map((item) => (
//           <li key={`list-${item.id}`}>
//             <Link
//               href={curQ ? `/?id=${item.id}&q=${curQ}` : `/?id=${item.id}`}
//               scroll={false}
//               onClick={() => handleOpen(item)}
//               aria-checked={location && item.id == location.id}
//               className="px-5 py-10 border-b flex gap-2 items-center justify-between group hover:bg-secondary aria-checked:bg-secondary"
//             >
//               <hgroup className="space-y-1">
//                 <h4 className="font-medium">{item.title}</h4>
//                 <p className="flex items-center gap-1 text-sm">
//                   <MapPinIcon size={12} />
//                   {item.address}
//                 </p>
//                 <p className="flex items-center gap-1 text-sm">
//                   <LocateFixedIcon size={12} />
//                   {item.location}
//                 </p>
//               </hgroup>
//               <ChevronRight className="group-hover:text-blue-400 group-hover:translate-x-2" />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };
