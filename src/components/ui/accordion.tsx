import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'
import { MinusIcon, PlusIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot='accordion'
      className={cn('flex w-full flex-col gap-3', className)}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'overflow-hidden rounded-xl border border-transparent bg-white shadow-sm transition-colors data-open:border-brand data-open:shadow-md',
        className,
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group/accordion-trigger flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground transition-all outline-none focus-visible:ring-2 focus-visible:ring-brand/30',
          className,
        )}
        {...props}
      >
        <span>{children}</span>
        <span className='flex size-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand'>
          <PlusIcon className='size-4 group-aria-expanded/accordion-trigger:hidden' />
          <MinusIcon className='hidden size-4 group-aria-expanded/accordion-trigger:block' />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot='accordion-content'
      className='overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up'
      {...props}
    >
      <div
        className={cn(
          'px-5 pb-4 text-sm leading-relaxed text-muted-foreground',
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
