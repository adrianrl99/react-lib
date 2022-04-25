import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { classes } from '@/utils/classes'

import styles from './Button.module.css'

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'contained' | 'outlined' | 'text'
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'normal'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Color of the button
   *
   * Default: `normal`
   */
  color?: ButtonColor
  /**
   * Variant of the button
   *
   * Default: `contained`
   */
  variant?: ButtonVariant
  /**
   * Size of the button
   *
   * Default: `medium`
   */
  size?: ButtonSize
  /**
   * Icon of the button
   */
  icon?: ReactNode
  /**
   * If `true`, the button will be disabled and change content to a loader
   *
   * Default: `false`
   */
  loading?: boolean
  /**
   * If `true`, the button will be active
   *
   * Default: `false`
   */
  active?: boolean
  /**
   * If `true`, the button will be expanded to full width
   *
   * Default: `false`
   */
  fullWith?: boolean
}

export const Button: FC<ButtonProps> = ({
  color = 'normal',
  variant = 'contained',
  size = 'medium',
  fullWith = false,
  active = false,
  loading = false,
  icon,
  className,
  children,
  disabled,
  ...props
}) => (
  <button
    className={classes(
      styles.Button,
      styles[`Button_${color}`],
      styles[`Button_${variant}`],
      styles[`Button_${size}`],
      {
        [styles.Button_loading]: loading,
        [styles.Button_fullWidth]: fullWith,
        [styles.Button_active]: active,
      },
      className,
    )}
    type="button"
    disabled={disabled || loading}
    {...props}
  >
    {loading ? (
      <span className={styles.Button_loader} />
    ) : (
      <>
        {icon}
        {children && <span>{children}</span>}
      </>
    )}
  </button>
)
