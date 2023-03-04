import React from "react";

import classes from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  onFocus?: () => void;
  type?: "button" | "submit" | "reset";
  cssClass?: string;
};

const Button = ({
  children,
  type = "button",
  cssClass = "",
  onClick,
  onFocus,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onFocus={onFocus}
      className={classes.button + " " + cssClass}
    >
      {children}
    </button>
  );
};

export default Button;
