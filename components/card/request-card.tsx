"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { useEffect, useState } from "react";
import { UploadButton } from "@/lib/utils";
import Image from "next/image";
import { XIcon } from "lucide-react";
import { toast } from "../ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "대여점 이름을 입력해주세요",
  }),
  description: z.string(),
  imageUrl: z.string(),
  lat: z.number({ message: "대여점의 위치를 지도에 찍어주세요" }),
  lng: z.number(),
});

const notiFormSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "이메일 형식을 확인해주세요" }),
});

export const RequestCard = () => {
  const [placeName, setPlaceName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [isOk2, setIsOk2] = useState(false);
  const useStore = createSelectors(useBoundStore);
  const map = useStore.use.naverMap();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
    },
  });

  const notiForm = useForm<z.infer<typeof notiFormSchema>>({
    resolver: zodResolver(notiFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    notiForm.setValue("name", values.name);
    const result = await fetch("/api/send", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    });
    setIsOk(result.ok);
  }

  async function notiFormOnSubmit(values: z.infer<typeof notiFormSchema>) {
    const result = await fetch("/api/send-noti", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    });
    setIsOk2(result.ok);
    if (result.ok) {
      toast({
        title: "알림 등록 성공",
        description: "이메일을 확인해주세요",
      });
    }
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

  if (isOk)
    return (
      <Card className="border-none md:border-solid w-full md:w-auto">
        <CardHeader>
          <CardTitle>새로운 장소 제보하기</CardTitle>
          <CardDescription>
            2인승 자전거 대여점을 발견하셨다면 알려주세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-5 text-6xl flex justify-between">
            <span>🚴‍♂️</span>
            <span>🚴‍♀️</span>
          </div>
          <p className="mt-5 max-w-96">
            제보해주셔서 감사합니다. 해당 정보를 검토한 후, 저희 웹사이트에
            반영하도록 하겠습니다.
          </p>
          <CardFooter className="mt-10">
            <Form {...form}>
              <form
                onSubmit={notiForm.handleSubmit(notiFormOnSubmit)}
                className="flex items-center justify-between gap-2"
              >
                <FormField
                  control={notiForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="email@naver.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={isOk2 || notiForm.formState.isSubmitting}>
                  알림받기
                </Button>
              </form>
            </Form>
          </CardFooter>
        </CardContent>
      </Card>
    );

  return (
    <>
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
                <div className="space-y-5 md:w-80 lg:w-96">
                  <FormField
                    control={form.control}
                    name="name"
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
                        <div className="h-96 w-full rounded-lg overflow-hidden border">
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
                <div className="space-y-5 md:w-80 lg:w-96">
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이미지 첨부</FormLabel>
                        {form.getValues().imageUrl ? (
                          <div className="relative h-96 md:h-40 w-full rounded-lg overflow-hidden border">
                            <Button
                              size={"icon"}
                              variant={"secondary"}
                              className="absolute top-1 right-1 h-6 w-6 rounded-full"
                              onClick={() => form.setValue("imageUrl", "")}
                            >
                              <XIcon size={16} />
                            </Button>
                            <Image
                              className="h-full w-full object-cover"
                              src={form.getValues().imageUrl}
                              alt="asd"
                              width={400}
                              height={400}
                            />
                          </div>
                        ) : (
                          <UploadButton
                            endpoint="imageUploader"
                            className="rounded-lg py-12 px-2 border"
                            onUploadBegin={() => setIsLoading(true)}
                            onClientUploadComplete={(res) => {
                              const imageUrl = res[0].url;
                              form.setValue("imageUrl", imageUrl);
                              setIsLoading(false);
                            }}
                            onUploadError={(error: Error) => {
                              // Do something with the error.
                              alert(`ERROR! ${error.message}`);
                            }}
                          />
                        )}
                        <FormMessage className="col-span-4" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>기타 설명</FormLabel>
                        <FormControl>
                          <Textarea
                            className="h-[16.5rem] w-full"
                            placeholder="가격이나 운영시간을 알고계신다면 적어주세요"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="col-span-4" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button
                className="mt-10 py-6 w-full"
                type="submit"
                disabled={form.formState.isSubmitting || isLoading}
              >
                제보하기
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};
