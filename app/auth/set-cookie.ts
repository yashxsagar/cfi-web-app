import { useEffect } from "react";
import { useRouter } from "next/router";

const SetCookie = () => {
  const router = useRouter();
  const { token, workspaceUrl } = router.query;

  useEffect(() => {
    if (token && workspaceUrl) {
      document.cookie = `jwt=${token}; path=/; HttpOnly; SameSite=Strict; Secure`;
      router.push(decodeURIComponent(workspaceUrl as string));
    }
  }, [token, workspaceUrl, router]);

  //   return <div>Loading...</div>;
};

export default SetCookie;
