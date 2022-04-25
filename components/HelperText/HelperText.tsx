import { FC, HTMLAttributes } from 'react'

import { classes } from '@/utils/classes'

import styles from './HelperText.module.css'

interface HelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  error?: boolean
}

export const HelperText: FC<HelperTextProps> = ({
  className,
  children,
  error,
  ...props
}) => (
  <span
    className={classes(styles.HelperText, className, {
      [styles.HelperText_error]: error,
    })}
    {...props}
  >
    {children}
  </span>
)
