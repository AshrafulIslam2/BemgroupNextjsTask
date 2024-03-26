import LoginMain from "@/components/Login/LoginMain";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-gray-100 flex w-full min-h-screen flex-col items-center justify-between p-24">
      <LoginMain />
    </main>
  );
}
