// utils/logout.ts
import { useRouter } from "next/router";
export const handleLogout = () => {
  const router = useRouter();
  fetch("/api/auth/logout", {
    method: "POST",
  }).then(() => {
    router.push("/");
  });
};
