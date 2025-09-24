"use server";

export async function RequestAction(_: { success: boolean; message: string }, formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const coor = formData.get("coor") as string;

    // 1초 대기
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!title || !coor) {
      return { success: false, message: "필수 항목이 누락되었습니다." };
    }

    // TODO: DB 저장 로직
    return { success: true, message: "제보가 성공적으로 등록되었습니다." };
  } catch {
    return { success: false, message: "서버 오류가 발생했습니다." };
  }
}
