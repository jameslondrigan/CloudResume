// src/components/ui/Button.jsx
import React from "react";
import { cn } from "../../utils/utils";

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none text-sm";

  const variants = {
    default:
      "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200",
    outline:
      "border border-neutral-200 bg-transparent hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800",
    ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800",
  };

  const sizes = {
    sm: "h-8 px-3",
    md: "h-10 px-4",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
