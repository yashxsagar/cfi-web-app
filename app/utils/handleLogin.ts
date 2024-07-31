"use client";

interface Props {
  setLogging: (flag: boolean) => void;
}
export default async function handleLogin({ setLogging }: Props) {
  try {
    setLogging(true);
    const response = await fetch("api/auth/loginRedirect", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json", // Indicates the content
      },
    });
    if (response.ok) {
      const data = await response.json();
      const redirectUrl = data.redirectUrl;
      console.log(redirectUrl);
      if (redirectUrl === "/auth/notion") {
        window.open(
          `${process.env.NEXT_PUBLIC_API_URL}${redirectUrl}`,
          "__blank"
        );
      } else {
        window.open(redirectUrl, "_blank");
      } // This will open the URL in a new tab
    } else {
      console.error(
        "Failed to get redirect URL from /api/auth/loginRedirect endpoint"
      );
    }
  } catch (error: any) {
    console.error("Error during login redirection:", error.message);
  } finally {
    setLogging(false);
  }
}
