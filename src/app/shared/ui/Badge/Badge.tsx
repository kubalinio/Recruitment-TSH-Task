import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "app/shared/utils/cn"

const badgeVariants = cva(
  "inline-flex items-center rounded-none px-2.5 py-0.5 text-sm font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gray-900 text-gray-50 hover:bg-gray-900/80",
        promo:
          "border-transparent bg-secondary px-4 py-1 text-white text-sm",

      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }