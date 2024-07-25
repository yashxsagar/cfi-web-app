// pages/api/auth/callback.ts
import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token, workspaceUrl } = req.query;

  if (
    !token ||
    !workspaceUrl ||
    Array.isArray(token) ||
    Array.isArray(workspaceUrl)
  ) {
    return res
      .status(400)
      .json({ message: "Missing or invalid token or workspace URL" });
  }

  const cookies = new Cookies(req, res);
  const isProduction = process.env.NODE_ENV === "production";

  // Set the JWT cookie with the specified properties
  cookies.set("jwt", token, {
    httpOnly: true,
    maxAge: 180 * 24 * 60 * 60 * 1000, // 180 days in milliseconds
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  });

  // Log the cookie setting for debugging
  console.log("Setting cookie:", {
    token,
    secure: isProduction,
    sameSite: "none",
  });
  // const secureFlag = process.env.NODE_ENV === "production" ? "Secure;" : "";

  // // Set the JWT cookie with the specified properties
  // res.setHeader(
  //   "Set-Cookie",
  //   `jwt=${token}; Path=/; HttpOnly; Max-Age=${
  //     180 * 24 * 60 * 60
  //   }; SameSite=None; ${secureFlag}`
  // );

  // Redirect to the workspace URL
  res.writeHead(302, { Location: decodeURIComponent(workspaceUrl) });
  res.end();
}
