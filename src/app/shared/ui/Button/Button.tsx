import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[4px] text-sm font-semibold transition-colors disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-accent disabled:bg-disabled aria-disabled:bg-disabled aria-disabled:pointer-events-none",
        outline:
          "border border-primary bg-white text-primary hover:border-accent hover:text-accent disabled:border-disabled",
      },
      size: {
        default: "h-10 px-4 py-[11px]",
        sm: "h-9 rounded-md px-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
