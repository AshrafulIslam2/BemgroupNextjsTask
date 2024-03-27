"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import Input from "./Input";
import { useRouter } from "next/navigation";
const defaultData = { username: "", password: "", app: 2 };
const LoginMain = () => {
  const [data, setData] = useState(defaultData);
  const router = useRouter();
  const onValueChange = (e) => {
    const form = e.target.form;
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const sendUserInformation = (e) => {
    e.preventDefault();

    localStorage.setItem("data", "ashraful");
    fetch(`https://market.vemate.com/api/v1/account/public/users/signin/`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.token);
        Cookies.set("token", data.token);
        router.push("/");
        // form.reset();
      });
  };
  return (
    <div className="bg-white px-4 sm:px-16 pt-8 min-w-[310px] pb-12 mb-4 rounded-xl shadow-2xl">
      <h1 className="text-3xl font-medium mb-4 text-center">Login </h1>
      <form onSubmit={sendUserInformation} className="w-full">
        <Input
          label="Email"
          id="username"
          placeholder="Your Email"
          type="email"
          value={data.name}
          onValueChange={onValueChange}
        />
        <Input
          label="Password"
          id="password"
          placeholder="Your password"
          type="password"
          value={data.name}
          onValueChange={onValueChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded-full w-full"
        >
          SignIn
        </button>
      </form>
    </div>
  );
};

export default LoginMain;
