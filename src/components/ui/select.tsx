import { Listbox } from "@headlessui/react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Select({ options, value, onChange, className }) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className={cn("relative", className)}>
        <Listbox.Button className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          {value ? options.find(o => o.value === value)?.label : "Select..."}
          <ChevronDown className="h-4 w-4 opacity-50 ml-2" />
        </Listbox.Button>
        <Listbox.Options className="absolute mt-1 w-full rounded-md bg-background shadow-lg z-10">
          {options.map(option => (
            <Listbox.Option
              key={option.value}
              value={option.value}
              className={({ active, selected }) =>
                cn(
                  "cursor-pointer select-none relative py-2 pl-10 pr-4",
                  active ? "bg-accent text-accent-foreground" : "",
                  selected ? "font-medium" : "font-normal"
                )
              }
            >
              {({ selected }) => (
                <>
                  <span className={cn("block truncate", selected ? "font-medium" : "font-normal")}>{option.label}</span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <Check className="h-4 w-4" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}
