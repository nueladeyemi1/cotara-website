import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, ...options },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return ref
}

export function useStaggerReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = container.querySelectorAll('.stagger-item')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '50px' },
    )

    children.forEach((child) => observer.observe(child))
    return () => observer.disconnect()
  }, [])

  return ref
}
