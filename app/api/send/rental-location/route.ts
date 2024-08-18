import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, description, imageUrl, lat, lng } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Twicycle <twicycle@resend.dev>",
      to: ["mrbonk97@gmail.com"],
      subject: "[2인거] 새로운 장소 요청",
      react: EmailTemplate({ name, description, imageUrl, lat, lng }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
