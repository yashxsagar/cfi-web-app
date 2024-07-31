"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { set } from "@/app/manageCookies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

  //Call the manage Cookies server action fro the /api/auth/callback route
  await set(req, res, token);

  // Redirect to the workspace URL
  res.writeHead(302, { Location: decodeURIComponent(workspaceUrl) });
  res.end();
}
