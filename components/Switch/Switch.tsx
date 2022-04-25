// import { css } from '@emotion/react'
// import styled from '@emotion/styled'

import { ChangeEventHandler, FC } from 'react'

import { classes } from '@/utils/classes'

import styles, { Switch_active } from './Switch.module.css'

export type SwitchSize = 'small' | 'medium' | 'large'
export type SwitchColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'

export type SwitchProps = {
  /**
   * Color of the switch
   *
   * Default: `primary`
   */
  color?: SwitchColor
  /**
   * Size of the switch
   *
   * Default: `medium`
   */
  size?: SwitchSize
  /**
   * Whether the command or control is checked
   *
   * Default: `false`
   */
  checked?: boolean
  /**
   * Emit an event when the value changes
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Switch: FC<SwitchProps> = ({
  color = 'primary',
  size = 'medium',
  checked = false,
  onChange,
}) => (
  <label
    className={classes(
      styles.Switch,
      styles[`Switch_${size}`],
      styles[`Switch_${color}`],
      {
        [Switch_active]: checked,
      },
    )}
  >
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span />
  </label>
)
