// pages/api/auth/logout.ts
import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);
  cookies.set("jwt", "", {
    httpOnly: true,
    maxAge: -1, // Setting a negative maxAge to delete the cookie
    path: "/",
  });

  res.status(200).json({ message: "Logged out successfully" });
}
