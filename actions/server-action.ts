"use server";

import { redirect } from "next/navigation";

export const searchAction = async (form: FormData) => {
  const q = form.get("q");
  if (!q) redirect("/");

  const encoded = encodeURIComponent(q.toString().trim());
  redirect(q ? `/?q=${encoded}` : "/");
};
