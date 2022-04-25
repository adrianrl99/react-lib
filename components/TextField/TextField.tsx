import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

import { HelperText } from '@/components/HelperText'
import { FieldProps } from '@/typings'

import styles from './TextField.module.css'

export interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    FieldProps {
  slotAfterInput?: ReactNode
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, slotAfterInput, error, helperText, helperErrorText, ...props },
    ref,
  ) => (
    <label className={styles.TextField}>
      <span className={styles.TextField_label}>
        {label}
        {props.required && (
          <span className={styles.TextField_label_asterisk}>*</span>
        )}
      </span>
      <input {...props} ref={ref} />
      {slotAfterInput}
      <HelperText error={error}>
        {error ? helperErrorText : helperText}
      </HelperText>
    </label>
  ),
)
