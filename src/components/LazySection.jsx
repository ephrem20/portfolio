import React, { useEffect, useRef, useState } from 'react'

function LazySection({ id, children, rootMargin = '300px', once = true, className }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin, once])

  return (
    <section id={id} ref={containerRef} className={className}>
      {isVisible ? children : null}
    </section>
  )
}

export default LazySection
