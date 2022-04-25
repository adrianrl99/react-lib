import { FC } from 'react'

import { classes } from '@/utils/classes'

import styles from './Dot.module.css'

export type DotSize = 'small' | 'medium' | 'large'
export type DotColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'transparent'

export type DotProps = {
  /**
   * Size of the dot.
   *
   * Default: `medium`
   */
  size?: DotSize
  /**
   * Color of the dot.
   *
   * Default: `primary`
   */
  color?: DotColor
  /**
   * Custom classname to be added to the component.
   */
  className?: string
}

export const Dot: FC<DotProps> = ({
  size = 'medium',
  color = 'primary',
  className,
}) => (
  <span
    className={classes(
      styles.Dot,
      styles[`Dot_${size}`],
      styles[`Dot_${color}`],
      className,
    )}
  />
)
