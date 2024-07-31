"use server";

import { clear } from "@/app/manageCookies";
import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await clear(req, res);
    // revalidatePath("/");
    res.status(200).json("Logout successful");
  } catch (error: any) {
    res.status(500).json({
      message: `Error in logging out user with jwt: ${req.cookies.jwt}`,
    });
  }
}
