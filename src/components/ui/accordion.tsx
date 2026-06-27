import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'
import { CircleMinusIcon, CirclePlusIcon } from 'lucide-react'

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

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'overflow-hidden rounded-xl border border-transparent bg-white transition-all duration-300 ease-out data-open:border-brand',
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
          'group/accordion-trigger flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground transition-all outline-none focus-visible:ring-2 focus-visible:ring-brand/30',
          className,
        )}
        {...props}
      >
        <span>{children}</span>
        <span className='relative mt-0.5 flex size-4.5 shrink-0 items-center justify-center text-brand'>
          <CirclePlusIcon className='absolute size-4.5 transition-all duration-300 ease-out group-aria-expanded/accordion-trigger:scale-0 group-aria-expanded/accordion-trigger:opacity-0' />
          <CircleMinusIcon className='absolute size-4.5 scale-0 opacity-0 transition-all duration-300 ease-out group-aria-expanded/accordion-trigger:scale-100 group-aria-expanded/accordion-trigger:opacity-100' />
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
