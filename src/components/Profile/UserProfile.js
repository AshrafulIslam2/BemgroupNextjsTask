"use client";
import React, { useEffect, useState } from "react";
import Input from "../Login/Input";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const defaultData = { first_name: "", last_name: "" };
const UserProfile = () => {
  const [data, setData] = useState(defaultData);
  const router = useRouter();
  const onValueChange = (e) => {
    const form = e.target.form;
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const sendUserInformation = (e) => {
    e.preventDefault();
    console.log("data", data);

    const res = axios
      .patch(
        "https://eservice.vemate.com/api/v1/account/public/users/profile/ ",
        data,
        {
          headers: {
            Authorization: `Bearer ashbdjasbdghasbhdbhjasjdhvjas`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    Cookies.remove("token");
    router.push("/");
  };
  useEffect(() => {
    const res = axios
      .get(
        "https://eservice.vemate.com/api/v1/account/public/users/profile/ ",
        data,
        {
          headers: {
            Authorization: `Bearer ashbdjasbdghasbhdbhjasjdhvjas`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="flex justify-end px-20 py-4">
        <button
          onClick={logout}
          type="submit"
          className="bg-blue-500 text-xl hover:bg-red-700 text-white py-1 px-2 rounded-md w-fit"
        >
          Sign Out
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-16">
        <div className="border border-gray-300 shadow-xl flex  flex-col rounded-md justify-center gap-10 px-4">
          <div className="flex gap-3 text-justify ">
            <h1>Name :</h1>
            <h1>Ashraful Islam</h1>
          </div>
          <div className="flex gap-3 ">
            <h1>Email :</h1>
            <h1>email@gmail.com</h1>
          </div>
        </div>
        <div className="bg-white border h-full border-gray-300 rounded-md shadow-xl px-16 pt-8  pb-12 mb-4">
          <h1 className="text-3xl font-medium mb-4 text-center">
            Update Information{" "}
          </h1>
          <form onSubmit={sendUserInformation}>
            <Input
              label="first_name"
              id="first_name"
              placeholder="Your first_name"
              type="text"
              value={data.name}
              onValueChange={onValueChange}
            />
            <Input
              label="last_name"
              id="last_name"
              placeholder="Your last_name"
              type="text"
              value={data.name}
              onValueChange={onValueChange}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded-full w-full"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
