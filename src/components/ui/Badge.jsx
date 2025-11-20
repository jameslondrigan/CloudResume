// src/components/ui/Badge.jsx
import React from "react";
import { cn } from "../../utils/utils";

export function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default:
      "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900",
    outline:
      "border border-neutral-300 text-neutral-700 dark:border-neutral-700 dark:text-neutral-200",
    secondary:
      "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
