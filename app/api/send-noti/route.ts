import { NotificationEmailTemplate } from "@/components/email-template/notification-email-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
resend.domains.create({ name: "twicycle.site" });

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "twicycle <noreply@twicycle.site>",
      to: [email, "hyunsuk1997@naver.com"],
      subject: "[2인거] 신규 장소 알림 등록 확인",
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
