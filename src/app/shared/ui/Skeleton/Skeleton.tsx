import { cn } from "app/shared/utils/cn"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-disabled/50", className)}
      {...props}
    />
  )
}

export { Skeleton }
