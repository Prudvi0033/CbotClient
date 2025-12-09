"use client";
import React, { useEffect } from "react";
import Home from "./components/Home";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(token){
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div>
      <Home />
    </div>
  );
};

export default Page;
