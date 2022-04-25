import { FC, ReactNode } from 'react'

import { Button, ButtonProps } from '@/components/Button'
import { Card } from '@/components/Card'
import { classes } from '@/utils/classes'

import styles from './Select.module.css'

interface SelectProps {
  open: boolean
  onOpen: VoidFunction
  onClose: VoidFunction
  onSelect: (value: string) => void
  value?: string
  options?: string[]
  buttonProps?: ButtonProps
  renderValue?: (value: string) => string
  renderOption?: (option: string) => string
  renderOptionIcon?: (option: string) => ReactNode
}

export const Select: FC<SelectProps> = ({
  open = false,
  value = '',
  options,
  buttonProps,
  onClose,
  onOpen,
  onSelect,
  renderValue,
  renderOption,
  renderOptionIcon,
}) => (
  <span className={styles.Select}>
    <Button
      active={open}
      onClick={() => (open ? onClose() : onOpen())}
      variant="text"
      {...buttonProps}
    >
      {renderValue?.(value) ?? value}
    </Button>
    <Card
      className={classes(
        styles.Select_container,
        styles[`Select_container_${buttonProps?.size ?? 'medium'}`],
        {
          [styles.Select_container_open]: open && options && options.length > 0,
        },
      )}
    >
      {options
        ?.filter(option => option !== value)
        .map(option => (
          <Button
            key={option}
            variant="text"
            className={styles.Select_option}
            onClick={() => onSelect(option)}
            icon={renderOptionIcon?.(option)}
          >
            {renderOption?.(option) ?? option}
          </Button>
        ))}
    </Card>
  </span>
)
