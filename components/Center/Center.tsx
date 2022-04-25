import { FC } from 'react'

import { classes } from '@/utils/classes'

import styles from './Center.module.css'

export type CenterProps = {
  /**
   * If `true`, content will be centered horizontally.
   *
   * Default: `true`
   */
  x?: boolean
  /**
   * If `true`, content will be centered vertically.
   *
   * Default: `true`
   */
  y?: boolean
}

export const Center: FC<CenterProps> = ({ children, x = true, y = true }) => (
  <div
    className={classes(styles.Center, {
      [styles.Center_x]: x,
      [styles.Center_y]: y,
    })}
  >
    {children}
  </div>
)
