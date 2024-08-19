import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BirdIcon } from "lucide-react";

export const PleaseRequestCard = () => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>등록된 대여점이 없습니다.</CardTitle>
        <CardDescription>
          알고 계신 장소가 있으시다면 제보해주세요
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-20 flex justify-center">
        <BirdIcon size={64} className="text-blue-400 hover:animate-spin" />
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-center">
          <Button variant={"link"}>
            <Link href={"/request"}>제보하러 가기</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
