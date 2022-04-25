import { Property } from 'csstype'
import { FC, useLayoutEffect, useRef } from 'react'

import { classes } from '@/utils/classes'

import styles from './List.module.css'

export type ListProps = {
  /**
   * Id of the list
   */
  id?: string
  /**
   * Gap between list items
   *
   * Default: **0**
   */
  gap?: Property.Gap
  /**
   * Direction of the list
   *
   * Default: **row**
   */
  flexDirection?: Property.FlexDirection
  /**
   * Justify content of the list
   *
   * Default: **normal**
   */
  justifyContent?: Property.JustifyContent
  /**
   * Align items of the list
   *
   * Default: **normal**
   */
  alignItems?: Property.AlignItems
  /**
   * Flex wrap of the list
   *
   * Default: **nowrap**
   */
  flexWrap?: Property.FlexWrap
  /**
   * Custom classname to be added to the component.
   */
  className?: string
}

export const List: FC<ListProps> = ({ id, children, className, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (el) {
      Object.entries(props).forEach(([key, value]) => {
        el.style.setProperty(`--list-${key}`, value)
      })
    }
  }, [props])

  return (
    <div id={id} ref={ref} className={classes(styles.List, className)}>
      {children}
    </div>
  )
}

List.defaultProps = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '0',
  justifyContent: 'normal',
  alignItems: 'normal',
}
