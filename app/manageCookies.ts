"use Server";
import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";
export async function set(
  req: NextApiRequest,
  res: NextApiResponse,
  jwt: string
) {
  const isProduction = process.env.NODE_ENV === "production";

  const cookies = new Cookies(req, res, { secure: isProduction });

  cookies.set("jwt", jwt, {
    httpOnly: true,
    maxAge: 180 * 24 * 60 * 60 * 1000, //180 days in milliseconds
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  });

  console.log(
    `Next Js Session Cookie set:
    \nCookie string: ${jwt}}\nsecure: ${isProduction}
    \nsameSite:${isProduction ? "none" : "lax"}\nmaxAge: 6 months`
  );
}
export async function clear(req: NextApiRequest, res: NextApiResponse) {
  const isProduction = process.env.NODE_ENV === "production";

  const cookies = new Cookies(req, res, { secure: isProduction });

  cookies.set("jwt", "", {
    httpOnly: true,
    secure: isProduction,
    maxAge: 0, //Set maxAge to 0 to delete the cookie
    path: "/",
    sameSite: isProduction ? "none" : "lax",
  });

  console.log("Cleared cookie !");

  console.log(
    `Next Js Session Cookie is:
      \nCookie string: ""\nsecure: ${isProduction}
      \nsameSite:${isProduction ? "none" : "lax"}\nmaxAge: 0`
  );
  //   revalidatePath("/");
}
