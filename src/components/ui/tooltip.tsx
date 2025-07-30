import { Popover } from "@headlessui/react"
import { cn } from "@/lib/utils"

export function Tooltip({ content, children, className }) {
  return (
    <Popover className="relative inline-block">
      <Popover.Button className={cn("focus:outline-none", className)}>{children}</Popover.Button>
      <Popover.Panel className="z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95">
        {content}
      </Popover.Panel>
    </Popover>
  )
}
