import { Menu } from "@headlessui/react"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

export function Menubar({ menus, className }) {
  return (
    <nav className={cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)}>
      {menus.map((menu, idx) => (
        <Menu as="div" className="relative" key={idx}>
          <Menu.Button className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground">
            {menu.label}
          </Menu.Button>
          <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            {menu.items.map((item, i) => (
              <Menu.Item key={i}>
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
      ))}
    </nav>
  )
}
