import { Popover } from "@headlessui/react"
import { cn } from "@/lib/utils"

export function HoverCard({ trigger, children, className }) {
  return (
    <Popover className="relative inline-block">
      <Popover.Button className={cn(className)}>{trigger}</Popover.Button>
      <Popover.Panel className="z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none">
        {children}
      </Popover.Panel>
    </Popover>
  )
}
