import { Menu } from "@headlessui/react"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContextMenu({ items, button, className }) {
  return (
    <Menu as="div" className={cn("relative inline-block text-left", className)}>
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {button}
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
        {items.map((item, idx) => (
          <Menu.Item key={idx}>
            {({ active }) => (
              <button
                className={cn(
                  "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                  active ? "bg-accent text-accent-foreground" : "text-gray-900"
                )}
                onClick={item.onClick}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}
