import { NotificationEmailTemplate } from "@/components/email-template/notification-email-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Twicycle <twicycle@resend.dev>",
      to: ["mrbonk97@gmail.com"],
      subject: "[2인거] 장소 알림 등록 확인",
      react: NotificationEmailTemplate({ name }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
