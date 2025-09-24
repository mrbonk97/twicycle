"use client";

import Form from "next/form";
import { useActionState } from "react";
import { RequestAction } from "@/lib/request-action";
import { NaverMapPinnable } from "./map/naver-map-pinnable";
import { SubmitButton } from "./buttons/submit-button";
import { MailCheck } from "lucide-react";
import Link from "next/link";

const initialState = { success: false, message: "" };

export function RequestForm() {
  const [state, formAction] = useActionState(RequestAction, initialState);

  if (state.success) {
    return (
      <div>
        <h2 className="text-2xl text-center sm:text-left font-semibold opacity-80">
          새로운 장소 제보
        </h2>
        <div className="mt-4 p-4 py-16 rounded-lg bg-secondary">
          <MailCheck className="mx-auto text-blue-400" size={72} />
          <p className="mt-4 text-center font-semibold opacity-80">제보해주셔서 감사합니다.</p>
          <p className="mt-2 text-sm text-center font-semibold opacity-70">
            검토 후 웹사이트에 반영하도록 하겠습니다.
          </p>
          <Link
            href={"/locations"}
            className="mt-8 block mx-auto w-fit underline-offset-2 hover:underline font-semibold opacity-70"
          >
            목록으로
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Form action={formAction}>
      <h2 className="text-2xl text-center sm:text-left font-semibold opacity-80">
        새로운 장소 제보
      </h2>
      <label htmlFor="title" className="mt-4 block">
        장소 이름
      </label>
      <input
        id="title"
        name="title"
        required
        placeholder="장소 이름을 입력해주세요"
        className="mt-1 p-4 w-full rounded-lg border"
      />
      <label htmlFor="description" className="mt-4 block">
        장소 설명
      </label>
      <textarea
        id="description"
        name="description"
        placeholder="장소 설명을 입력해주세요"
        className="mt-1 p-4 min-h-60 w-full rounded-lg border"
      />
      <div className="mt-4 block">장소 위치</div>
      <NaverMapPinnable className="mt-4 h-96 w-full rounded-lg" />
      <SubmitButton />
      {state.success === false && <p className="mt-2 text-destructive">{state.message}</p>}
    </Form>
  );
}
