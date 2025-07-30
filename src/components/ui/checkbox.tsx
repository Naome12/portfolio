import { Switch } from "@headlessui/react"
import { cn } from "@/lib/utils"

export function Checkbox({ checked, onChange, className, ...props }) {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={cn(
        "peer h-4 w-8 shrink-0 rounded-full border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-200 relative transition-colors",
        checked ? "bg-primary" : "bg-gray-200",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition-transform",
          checked ? "translate-x-4" : "translate-x-0"
        )}
      />
    </Switch>
  )
}
