import { Disclosure } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Accordion({ items }) {
  return (
    <div>
      {items.map((item, idx) => (
        <Disclosure key={idx}>
          {({ open }) => (
            <>
              <Disclosure.Button className={cn("flex w-full items-center justify-between py-4 font-medium transition-all hover:underline border-b")}> 
                {item.title}
                <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", open ? "rotate-180" : "")}/>
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 pt-0 text-sm transition-all">
                {item.content}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
