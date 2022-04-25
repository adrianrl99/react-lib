import { FC } from 'react'

import { classes } from '@/utils/classes'

import styles from './Divider.module.css'

export type DividerDirection = 'horizontal' | 'vertical'
export type DividerColor = 'primary' | 'success' | 'warning' | 'info' | 'error'

export type DividerProps = {
  /**
   * The direction of the divider.
   *
   * Default: 'horizontal'
   */
  direction?: DividerDirection
  /**
   * The color of the divider.
   *
   * Default: 'primary'
   */
  color?: DividerColor
  /**
   * Custom classname to be added to the component.
   */
  className?: string
}

export const Divider: FC<DividerProps> = ({
  direction = 'horizontal',
  color = 'primary',
  className,
}) => (
  <div
    className={classes(
      styles.Divider,
      styles[`Divider_${direction}`],
      styles[`Divider_${color}`],
      className,
    )}
  />
)
