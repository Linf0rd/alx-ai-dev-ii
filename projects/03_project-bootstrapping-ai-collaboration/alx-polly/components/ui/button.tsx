"use client";

import * as React from "react";
import { cn } from "../utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "destructive" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

const buttonVariants: Record<string, string> = {
  default:
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2",
  outline:
    "inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-transparent text-sm font-medium shadow-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 h-10 px-4 py-2",
  destructive:
    "inline-flex items-center justify-center whitespace-nowrap rounded-md bg-red-600 text-white text-sm font-medium shadow hover:bg-red-600/90 h-10 px-4 py-2",
  secondary:
    "inline-flex items-center justify-center whitespace-nowrap rounded-md bg-gray-100 text-gray-900 text-sm font-medium hover:bg-gray-200 h-10 px-4 py-2",
  ghost:
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium hover:bg-gray-100 h-10 px-4 py-2",
  link: "text-sm font-medium text-blue-600 underline-offset-4 hover:underline",
};

const sizeVariants: Record<string, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants[variant], sizeVariants[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;


