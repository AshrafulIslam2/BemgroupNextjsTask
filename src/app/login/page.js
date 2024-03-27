import LoginMain from "@/components/Login/LoginMain";
import React from "react";

function page() {
  return (
    <div className=" bg-gray-100 flex w-full min-h-screen flex-col items-center justify-between p-24">
      <LoginMain></LoginMain>
    </div>
  );
}

export default page;
