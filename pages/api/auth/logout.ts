// pages/api/auth/logout.ts
import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res, {
    secure: process.env.NODE_ENV === "production",
  });
  cookies.set("jwt", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0, // Set maxAge to 0 to delete the cookie
    path: "/",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  });

  // Log the cookie clearing for debugging
  console.log("Clearing cookie");

  res.redirect("/");
  res.end();
}
