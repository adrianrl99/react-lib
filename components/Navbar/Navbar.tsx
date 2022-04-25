import { FC } from 'react'

import { Card } from '@/components/Card'
import { Container, ContainerProps } from '@/components/Container'
import { List, ListProps } from '@/components/List'
import { classes } from '@/utils/classes'

import styles from './Navbar.module.css'

export type NavbarSize = 'small' | 'medium' | 'large'
export type NavbarVariant = 'sticky' | 'static' | 'fixed'

export type NavbarProps = {
  /**
   * Size of the navbar
   *
   * Default: **medium**
   */
  size?: NavbarSize
  /**
   * Variant of the navbar
   *
   * Default: **static**
   */
  variant?: NavbarVariant
  /**
   * Props to pass to the **List** component
   */
  listProps?: ListProps
  /**
   * If **fullWidth** is true, this prop will be passed to the container.
   */
  containerProps?: ContainerProps
  /**
   * If **true**, the navbar will be expanded to full width
   *
   * Default: **false**
   */
  fullWidth?: boolean
  /**
   * Custom classname to be added to the component.
   */
  className?: string
}

export const Navbar: FC<NavbarProps> = ({
  size = 'medium',
  variant = 'static',
  fullWidth = false,
  children,
  className,
  listProps,
  containerProps,
}) => {
  const Component = () => (
    <Card
      className={classes(
        styles.Navbar,
        styles[`Navbar_${size}`],
        styles[`Navbar_${variant}`],
        className,
      )}
    >
      <List alignItems={listProps?.alignItems ?? 'center'} {...listProps}>
        {children}
      </List>
    </Card>
  )

  if (fullWidth) {
    return <Component />
  }

  return (
    <Container
      {...containerProps}
      className={classes(
        styles.Navbar_container,
        styles[`Navbar_${variant}`],
        containerProps?.className,
      )}
    >
      <Component />
    </Container>
  )
}
