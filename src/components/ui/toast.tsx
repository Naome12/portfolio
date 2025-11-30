"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export const toastVariants = cva(
  "pointer-events-auto relative flex w-full max-w-sm items-center justify-between space-x-4 overflow-hidden rounded-md border bg-background p-4 shadow-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border",
        destructive: "bg-destructive text-destructive-foreground border-destructive",
      },
      state: {
        open: "opacity-100 translate-x-0",
        closed: "opacity-0 translate-x-5",
      },
    },
    defaultVariants: {
      variant: "default",
      state: "open",
    },
  }
)

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  duration?: number
}

export function Toast({
  className,
  variant,
  open = true,
  onOpenChange,
  duration = 3000,
  ...props
}: ToastProps) {
  const [visible, setVisible] = React.useState(open)

  React.useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => onOpenChange?.(false), 300)
      return () => clearTimeout(t)
    }
  }, [visible])

  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  return (
    <div
      className={cn(toastVariants({ variant, state: visible ? "open" : "closed" }), className)}
      {...props}
    />
  )
}

export function ToastTitle(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("font-semibold", props.className)} {...props} />
}

export function ToastDescription(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-sm opacity-90", props.className)} {...props} />
}

export function ToastClose(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "absolute right-2 top-2 rounded p-1 opacity-70 transition hover:opacity-100",
        props.className
      )}
      onClick={(e) => {
        props.onClick?.(e)
        props?.["data-toast-close"]?.()
      }}
      {...props}
    >
      <X className="h-4 w-4" />
    </button>
  )
}

export function ToastProvider({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return <>{children}</>
}

export function ToastViewport({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-50 flex flex-col gap-3",
        className
      )}
      {...props}
    />
  )
}
