import { Property } from 'csstype'
import { FC, useLayoutEffect, useRef } from 'react'

import styles from './Spacer.module.css'

export type SpacerProps = {
  height?: Property.Height
  width?: Property.Width
}

export const Spacer: FC<SpacerProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (el) {
      Object.entries(props)
        .filter(([_, value]) => value !== undefined && value !== null)
        .forEach(([key, value]) => {
          el.style.setProperty(`--spacer-${key}`, value)
        })
    }
  }, [props])

  return (
    <div ref={ref} className={styles.Spacer}>
      {children}
    </div>
  )
}
