import { ChangeEventHandler, forwardRef, useState } from 'react'
import validator from 'validator'

import { TextField, TextFieldProps } from '@/components/TextField'
import { classes } from '@/utils/classes'

import styles from './PasswordField.module.css'
import { PasswordStrongBar } from './PasswordStrongBar'

interface PasswordFieldProps extends TextFieldProps {
  withBar?: boolean
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ withBar, className, onChange, ...props }, ref) => {
    const [score, setScore] = useState(0)

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
      /**
       * * `any` because was a great idea that validator.isStrongPassword only return a number in types definition
       * * but in the code also return a number, beautiful language... 😡
       */
      setScore(
        validator.isStrongPassword(event.target.value, {
          returnScore: true,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as any as number,
      )
      onChange?.(event)
    }

    return (
      <TextField
        {...props}
        className={classes(styles.PasswordField, className)}
        type="password"
        onChange={handleChange}
        slotAfterInput={withBar && <PasswordStrongBar score={score} />}
        ref={ref}
      />
    )
  },
)
