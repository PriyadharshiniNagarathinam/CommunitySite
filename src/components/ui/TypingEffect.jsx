import TypedJS from 'typed.js'
import { useEffect, useRef } from 'react'

/**
 * Typing effect component
 * @param {import('typed.js').TypedOptions} props
 * @returns {React.JSX.Element}
 */

export default function TypingEffect({ strings = [''], ...props }) {
  const el = useRef(null)

  useEffect(() => {
    const typed = new TypedJS(el.current, {
      strings: strings,
      startDelay: 300,
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      ...props,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return <span ref={el}></span>
}
