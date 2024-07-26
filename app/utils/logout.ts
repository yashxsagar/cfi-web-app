// utils/logout.ts
export const handleLogout = async () => {
  localStorage.clear();
  sessionStorage.clear();
  document.cookie = "jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  console.log("Client-side cookie cleared");

  await fetch("/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  window.location.href = "/";
};
