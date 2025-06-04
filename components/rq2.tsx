"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadButton } from "@/app/api/uploadthing/upload-utils";

import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { bagelFatOne } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";
import { NaverMapAddPin } from "./map/naver-map-add-pin";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "대여점 이름을 입력해주세요",
  }),
  description: z.string().min(2, {
    message: "대여점 정보를 입력해주세요",
  }),
  imageUrl: z.string().min(2, {
    message: "이미지를 첨부해주세요",
  }),
  coord: z.string().min(2, {
    message: "지도에 좌표를 찍어주세요",
  }),
});

const formSchema2 = z.object({
  email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요" }),
});

export const Rq2 = () => {
  const [isFinishRequest, setIsFinishRequest] = useState(false);
  const [isFinishEmail, setIsFinishEmail] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
      coord: "",
    },
  });

  const form2 = useForm<z.infer<typeof formSchema2>>({
    resolver: zodResolver(formSchema2),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(values),
    });

    setIsFinishRequest(res.ok);
  };

  const onSubmit2 = async (values: z.infer<typeof formSchema2>) => {
    const res = await fetch("/api/send-noti", {
      method: "POST",
      body: JSON.stringify(values),
    });

    setIsFinishEmail(res.ok);
  };

  if (isFinishEmail)
    return (
      <Card className="mx-auto max-w-4xl min-h-[450px]">
        <CardHeader>
          <CardTitle>새로운 장소 제보</CardTitle>
          <CardDescription>2인승 자전거 대여점을 발견하셨다면 알려주세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-20 text-6xl text-center animate-bounce">😊</div>
          <Link
            href={"/"}
            className="block mt-10 mx-auto w-fit text-sm underline-offset-2 hover:underline"
          >
            처음 화면으로 이동
          </Link>
        </CardContent>
      </Card>
    );

  if (isFinishRequest)
    return (
      <Card className="mx-auto max-w-4xl min-h-[450px]">
        <CardHeader>
          <CardTitle>새로운 장소 제보</CardTitle>
          <CardDescription>2인승 자전거 대여점을 발견하셨다면 알려주세요</CardDescription>
        </CardHeader>
        <CardContent>
          <h2
            className={`mt-10 p-5 text-4xl font-medium text-center break-keep text-blue-400 ${bagelFatOne.className}`}
          >
            제보해주셔서 감사합니다.
          </h2>

          <Form {...form2}>
            <form onSubmit={form2.handleSubmit(onSubmit2)}>
              <FormField
                control={form2.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="mt-10 mx-auto max-w-sm"
                        placeholder="email@twicycle.site"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="block mx-auto mt-5 max-w-sm w-full"
                disabled={form2.formState.isSubmitting}
              >
                제출
              </Button>
            </form>
          </Form>
          <p className="mt-5 text-xs sm:text-sm font-medium text-muted-foreground text-center">
            이메일 주소를 알려주시면, 장소가 등록될 때 알려드릴게요.
          </p>
        </CardContent>
      </Card>
    );

  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle>새로운 장소 제보</CardTitle>
        <CardDescription>2인승 자전거 대여점을 발견하셨다면 알려주세요</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <div className="col-span-1 flex flex-col justify-between gap-5">
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
                name="coord"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>대여점 위치</FormLabel>
                    <div className="h-96 rounded-lg overflow-hidden border">
                      <NaverMapAddPin setCoord={(c: string) => form.setValue("coord", c)} />
                    </div>
                    <FormControl>
                      <Input {...field} readOnly className="hidden" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1 flex flex-col justify-between gap-5">
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이미지 첨부</FormLabel>
                    {form.getValues("imageUrl") && (
                      <div className="relative">
                        <Button
                          className="absolute top-2 right-2 rounded-full"
                          size={"icon"}
                          variant={"outline"}
                          onClick={() => form.setValue("imageUrl", "")}
                        >
                          <XIcon />
                        </Button>
                        <Image
                          src={form.getValues("imageUrl")}
                          alt="img"
                          height={384}
                          width={512}
                          className="h-72 w-full object-cover border rounded-xl"
                        />
                      </div>
                    )}
                    <UploadButton
                      className={form.getValues("imageUrl") ? "hidden" : ""}
                      appearance={{
                        button: "h-20 w-full !bg-primary !text-primary-foreground",
                        container: "!text-primary",
                        allowedContent: "!text-primary",
                      }}
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => form.setValue("imageUrl", res[0].ufsUrl)}
                      onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`오류가 발생했습니다! ${error.message}`);
                      }}
                    />
                    <FormControl>
                      <Input {...field} readOnly className="hidden" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="h-full flex flex-col">
                    <FormLabel>기타 설명</FormLabel>
                    <FormControl className="h-full">
                      <Textarea
                        className="h-full w-full"
                        placeholder="가격이나 운영시간을 알고계신다면 적어주세요"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="col-span-1 sm:col-span-2 py-6"
              disabled={form.formState.isSubmitting}
            >
              제보하기
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
