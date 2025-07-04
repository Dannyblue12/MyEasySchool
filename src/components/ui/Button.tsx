import React from "react";
import { twMerge } from "tailwind-merge";

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<BaseButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyles = "font-bold rounded-md transition-all duration-300";

  const sizeStyles = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
    xl: "px-6 py-3 text-xl",
  };

  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-600 text-white hover:bg-indigo-700",
    outline: "border border-indigo-700 text-indigo-700 hover:bg-indigo-100",
    ghost: "text-indigo-600 hover:bg-indigo-100",
  };

  return (
    <button
      className={twMerge(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
