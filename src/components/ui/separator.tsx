import { cn } from "@/lib/utils"

export function Separator({ className, ...props }) {
  return <hr className={cn("border-t border-border", className)} {...props} />
}
