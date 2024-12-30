import { cn } from "@utils/cn";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  buttonType?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  className = "",
  buttonType = "primary",
  ...props
}: ButtonProps) {
  const btnClasses = cn(
    "hover:scale-105 transition-transform",
    {
      "bg-primary-lime py-3 px-4 font-bold text-neutral-900 rounded-full":
        buttonType === "primary",
      "underline text-neutral-300": buttonType === "secondary",
    },
    className,
  );
  return (
    <button className={`btn-${buttonType} ${btnClasses}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
