import { RadioGroup } from "@headlessui/react"
import { Circle } from "lucide-react"
import { cn } from "@/lib/utils"

export function AppRadioGroup({ options, value, onChange, className }) {
  return (
    <RadioGroup value={value} onChange={onChange} className={cn("grid gap-2", className)}>
      {options.map(option => (
        <RadioGroup.Option key={option.value} value={option.value}>
          {({ checked }) => (
            <span
              className={cn(
                "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center",
                checked ? "bg-primary text-primary-foreground" : ""
              )}
            >
              {checked && <Circle className="h-2.5 w-2.5 fill-current text-current" />}
              {option.label}
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}
