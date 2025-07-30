import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"

const { Panel } = Tab

export function Tabs({ tabs, selectedIndex, onChange }) {
  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={onChange}>
      <Tab.List className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
        {tabs.map((tab, idx) => (
          <Tab
            key={tab.label}
            className={({ selected }) =>
              cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                selected ? "bg-background text-foreground shadow-sm" : ""
              )
            }
          >
            {tab.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab, idx) => (
          <Panel key={tab.label} className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            {tab.content}
          </Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
