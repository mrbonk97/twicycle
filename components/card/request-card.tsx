"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { createSelectors } from "@/stores/create-selector";
import { useBoundStore } from "@/stores/bound-store";
import { NaverMap } from "@/components/map/naver-map";
import { RENTAL_LOCATION } from "@/constants";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "대여점 이름을 입력해주세요",
  }),
  description: z.string(),
  lat: z.number({ message: "대여점의 위치를 지도에 찍어주세요" }),
  lng: z.number(),
});

export const RequestCard = () => {
  const useStore = createSelectors(useBoundStore);
  const map = useStore.use.naverMap();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  useEffect(() => {
    if (!map) return;
    var position = new naver.maps.LatLng(37.3595704, 127.105399);
    var marker = new naver.maps.Marker({
      position: position,
      map: map,
    });

    naver.maps.Event.addListener(map, "click", function (e) {
      marker.setPosition(e.coord);
      const lat = e.coord.y;
      const lng = e.coord.x;

      form.setValue("lat", lat);
      form.setValue("lng", lng);
    });
  }, [map]);

  return (
    <Card className="border-none md:border-solid w-full md:w-auto">
      <CardHeader>
        <CardTitle>새로운 장소 제보하기</CardTitle>
        <CardDescription>
          2인승 자전거 대여점을 발견하셨다면 알려주세요
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-5">
              <div>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>대여점 이름</FormLabel>
                      <FormControl>
                        <Input placeholder="이름을 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>대여점 위치</FormLabel>
                      <div className="h-96 w-full md:w-80 lg:w-96 rounded-lg overflow-hidden border">
                        <NaverMap
                          lat={RENTAL_LOCATION[0].lat}
                          lng={RENTAL_LOCATION[0].lng}
                        />
                      </div>
                      <FormMessage className="col-span-4" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>기타 설명</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-full min-h-80 md:h-[calc(100%-30px)] md:w-80 lg:w-96"
                        placeholder="가격이나 운영시간을 알고계신다면 적어주세요"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="col-span-4" />
                  </FormItem>
                )}
              />
            </div>

            <Button className="mt-10 py-6 w-full" type="submit">
              제보하기
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
