import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="flex justify-between">
      <div></div>
      <div>
        <ul className="flex gap-10 m-2">
          <li className=" bg-slate-100 p-1  hover:rounded-md transition-all duration-300 ease-in-out">
            <Link href={"/"}>Home</Link>
          </li>
          <li className=" bg-slate-100 p-1  hover:rounded-md transition-all duration-300 ease-in-out">
            <Link href={"/profile"}> Profile</Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Navigation;
