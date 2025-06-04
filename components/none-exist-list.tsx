import { BirdIcon } from "lucide-react";

export const NonExistList = () => {
  return (
    <li className="p-5 w-full text-muted-foreground">
      <BirdIcon size={72} className="mt-5 mx-auto" />
      <p className="mt-5 text-center font-medium">대여소가 없습니다.</p>
    </li>
  );
};
