

import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx'; // Import clsx to help with className merging

const buttonStyle = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
      dark : ["bg-secondary-dark", "hover:bg-secondary-dark-hover", "text-secondary"]
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyle> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button className={clsx(buttonStyle({ variant, size }), className)} {...props}></button>
  );
}