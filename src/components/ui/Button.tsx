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
    {
      "bg-primary-lime py-2 px-4 rounded-full": buttonType === "primary",
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