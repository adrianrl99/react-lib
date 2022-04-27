import { Property } from 'csstype'
import { FC, useLayoutEffect, useRef } from 'react'

import { classes } from '@/utils/classes'

import styles from './Spacer.module.css'

export type SpacerProps = {
  height?: Property.Height
  width?: Property.Width
  className?: string
}

export const Spacer: FC<SpacerProps> = ({ children, className, ...props }) => {
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
    <div ref={ref} className={classes(styles.Spacer, className)}>
      {children}
    </div>
  )
}
