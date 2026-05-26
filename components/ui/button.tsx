import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/70",
  {
    variants: {
      variant: {
        default:
          "bg-[#00D4FF] text-[#050816] hover:bg-[#00D4FF]/90 shadow-[0_0_30px_-8px_rgba(0,212,255,0.85)]",
        ghost:
          "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10",
        gradient:
          "bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#00D4FF] bg-[length:200%_100%] text-white shadow-[0_0_30px_-10px_rgba(124,58,237,0.9)] hover:animate-gradient-x",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-7 text-base",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

export { Button, buttonVariants };
