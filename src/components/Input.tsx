import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;

  placeholder: string;
  type: string;
  required: boolean;
}

const Input = ({ id, placeholder, type, required }: InputProps) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      className="text-black input input-bordered focus:ring-slate-100 placeholder:text-slate-400"
      required={required}
    />
  );
};

export default Input;
