import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  id: string;
  loading?: boolean;
}

const Button = ({ label, id, loading }: ButtonProps) => {
  return (
    <React.Fragment>
      <button id={id} disabled={loading}>
        {label}
      </button>
    </React.Fragment>
  );
};

export default Button;
