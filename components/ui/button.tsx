import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7ff4a]/60 disabled:pointer-events-none disabled:opacity-50 active:scale-[.98]",
  {
    variants: {
      variant: {
        primary: "bg-[#b7ff4a] text-[#07100d] shadow-[0_12px_40px_rgba(183,255,74,.12)] hover:bg-[#c9ff73]",
        secondary: "border border-white/10 bg-white/[.05] text-white hover:bg-white/[.09]",
        ghost: "text-white/70 hover:bg-white/[.06] hover:text-white",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-4",
        lg: "h-13 px-5 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {variant: "primary", size: "md"},
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, ...props}, ref) => (
    <button ref={ref} className={cn(buttonVariants({variant, size}), className)} {...props} />
  ),
);
Button.displayName = "Button";
