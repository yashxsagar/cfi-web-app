"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

let previousCookie: string | undefined = undefined;

export default async function checkifCookieSet() {
  const cookieStore = cookies();
  const newCookie = cookieStore.get("jwt")?.value;
  if (newCookie !== previousCookie) {
    console.log("Nexj Js Cookie Changed?", true);
    revalidatePath("/");
  } else {
    console.log("Next Js Cookie Changed?", false);
  }

  previousCookie = newCookie;
}
