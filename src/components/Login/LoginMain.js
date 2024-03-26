"use client";
import React, { useState } from "react";
import Input from "./Input";
const defaultData = { email: "", password: "" };
const LoginMain = () => {
  const [data, setData] = useState(defaultData);
  const onValueChange = (e) => {
    const form = e.target.form;
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const sendUserInformation = (e) => {
    e.preventDefault();
    console.log("data", data);
  };
  return (
    <div className="bg-white px-16 pt-8  pb-12 mb-4">
      <h1 className="text-3xl font-medium mb-4 text-center">SignIn </h1>
      <form onSubmit={sendUserInformation}>
        <Input
          label="Email"
          id="email"
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
