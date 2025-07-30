import { cn } from "@/lib/utils"

export function Progress({ value = 0, max = 100, className, ...props }) {
  return (
    <div className={cn("w-full bg-muted rounded-full h-2.5", className)} {...props}>
      <div
        className="bg-primary h-2.5 rounded-full transition-all"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  )
}
