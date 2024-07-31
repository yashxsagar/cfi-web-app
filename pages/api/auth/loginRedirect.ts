"use Server";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

export default async function loginRedirect(
  _req?: NextApiRequest,
  _res?: NextApiResponse
) {
  const headers: HeadersInit = {};
  const cookieValue = _req?.cookies.jwt;
  console.log("Cookie Value is: " + cookieValue);
  if (cookieValue) {
    headers.Cookie = `jwt=${cookieValue}`;
    console.log(headers);
  }

  try {
    const response = await fetch(`${process.env.NEST_API_URL}/auth/login`, {
      method: "GET",
      headers: headers,
      credentials: "include",
      redirect: "manual",
    });
    if (response.status === 302) {
      //check if the response is a redirect
      const redirectUrl = response.headers.get("location");
      console.log(`Redirecting to: ${redirectUrl}`);
      //   return redirectUrl;
      _res!.status(200).json({ redirectUrl });
    } else if (!response.ok) {
      console.log(`Redirection failed with status: ${response.status}`);
      _res!.status(500).json({
        error:
          "Failed to fetch redirect URL - Network redirect response from https://tabx.io/auth/login was not Okay!",
      });
      //   throw new Error(
      //     "Network redirect response from https://tabx.io/auth/login was not Okay!"
      //   );
    }
  } catch (error: any) {
    console.error("Error during redirection: ", error.message);
    _res!.status(500).json({ error: "Server error during redirection" });
  }
}
