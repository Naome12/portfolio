import { Popover } from "@headlessui/react"
import { cn } from "@/lib/utils"

export function AppPopover({ button, children, className }) {
  return (
    <Popover className="relative">
      <Popover.Button className={cn(className)}>{button}</Popover.Button>
      <Popover.Panel className="z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none">
        {children}
      </Popover.Panel>
    </Popover>
  )
}
