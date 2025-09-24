"use client";

import { useFormStatus } from "react-dom";
import { Spinner } from "../spinner";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="mt-4 p-4 w-full bg-primary text-primary-foreground rounded-lg"
    >
      {pending ? <Spinner /> : "제보하기"}
    </button>
  );
}
