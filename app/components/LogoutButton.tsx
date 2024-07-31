"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
  setModalOpen: (isOpen: boolean) => void; // Function type for setModalOpen
  children: ReactNode;
}
const LogoutButton = ({ setModalOpen, children }: Props) => {
  const router = useRouter();
  async function executeLogout() {
    localStorage.clear();
    sessionStorage.clear();
    setModalOpen(false);
    //   document.cookie = "jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    console.log("Client-side cookie cleared");
    const response = await fetch("api/auth/serverLogout", {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      console.log("Server-side cookie cleared");
      router.refresh();
    } else {
      console.error("Failed to clear server side cookie");
    }
  }
  return (
    <button className="btn btn-error" onClick={executeLogout}>
      {children}
    </button>
  );
};
export default LogoutButton;
