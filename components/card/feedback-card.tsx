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
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "../ui/use-toast";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "이메일 형식을 확인해주세요" }),
});

interface FeedbackCardProps {
  name: string;
}

export const FeedbackCard = ({ name }: FeedbackCardProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
      email: "",
    },
  });

  async function notiFormOnSubmit(values: z.infer<typeof formSchema>) {
    const result = await fetch("/api/send-noti", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    });
    if (result.ok) {
      toast({
        title: "알림 등록 성공",
        description: "이메일을 확인해주세요",
      });
    }
  }

  return (
    <Card>
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
              onSubmit={form.handleSubmit(notiFormOnSubmit)}
              className="flex items-center justify-between gap-2"
            >
              <FormField
                control={form.control}
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
              <Button disabled={form.formState.isSubmitting}>알림받기</Button>
            </form>
          </Form>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
