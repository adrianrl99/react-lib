import { FC, ReactNode } from 'react'

import { Button, ButtonProps } from '@/components/Button'
import { Card, CardProps } from '@/components/Card'
import { classes } from '@/utils/classes'

import styles from './Menu.module.css'

interface MenuProps {
  /**
   * If **true**, menu content will be displayed
   *
   * Default: **false**
   */
  open: boolean
  /**
   * Function to be called when **open** is set to **false**
   */
  onOpen: VoidFunction
  /**
   * Function to be called when **open** is set to **true**
   */
  onClose: VoidFunction
  /**
   * Component to be rendered as the button content of the menu
   */
  title: ReactNode
  /**
   * Props to be passed to the menu button
   */
  buttonProps?: ButtonProps
  /**
   * Props to be passed to the menu container
   */
  cardProps?: CardProps
  /**
   * Custom classname to be added to the component.
   */
  className?: string
}

export const Menu: FC<MenuProps> = ({
  open = false,
  buttonProps,
  cardProps,
  onClose,
  onOpen,
  title,
  className,
  children,
}) => (
  <span className={classes(styles.Menu, className)}>
    <Button
      active={open}
      onClick={() => (open ? onClose() : onOpen())}
      variant="text"
      {...buttonProps}
      className={classes(styles.Menu_button, buttonProps?.className)}
    >
      {title}
    </Button>
    <Card
      {...cardProps}
      className={classes(
        styles.Menu_container,
        styles[`Menu_container_${buttonProps?.size ?? 'medium'}`],
        {
          [styles.Menu_container_open]: open,
        },
        cardProps?.className,
      )}
    >
      {children}
    </Card>
  </span>
)
