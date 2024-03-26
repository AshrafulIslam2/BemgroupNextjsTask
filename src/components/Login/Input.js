import React, { useState } from "react";

const Input = ({ label, type, id, placeholder, onValueChange, ...props }) => {
  return (
    <div className="mb-2 ">
      <label htmlFor={id} className="block text-gray-600 font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        name={id}
        onChange={onValueChange}
        autoComplete="off"
        placeholder={placeholder}
        {...props}
        className="border border-gray-500 w-full p-2  rounded-md focus:outline-none focus:border focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
