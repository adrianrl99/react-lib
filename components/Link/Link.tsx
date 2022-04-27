import { FC } from 'react'
import {
  Link as RouteLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

import { Button, ButtonProps } from '@/components/Button'
import { Card, CardProps } from '@/components/Card'
import { classes } from '@/utils/classes'

import styles from './Link.module.css'

export type LinkProps = RouterLinkProps & {
  /**
   * If **true**, the link will be rendered as a button.
   */
  asButton?: boolean
  /**
   * If **asButton** is true, this prop will be passed to the button.
   */
  buttonProps?: ButtonProps
  /**
   * If **true**, the link will be rendered as a card.
   */
  asCard?: boolean
  /**
   * If **asCard** is true, this prop will be passed to the card.
   */
  cardProps?: CardProps
}

const Link: FC<LinkProps> = ({
  className,
  to,
  asButton,
  buttonProps,
  children,
  asCard,
  cardProps,
  ...props
}) => {
  const Wrapper: FC<{ className?: string }> = ({
    children,
    className: _className,
  }) =>
    /^[http|mailto|tel]/.test(to.toString()) ? (
      <a
        target="_blank"
        rel="noreferrer"
        {...props}
        href={to.toString()}
        className={classes(_className, className)}
      >
        {children}
      </a>
    ) : (
      <RouteLink className={classes(_className, className)} to={to} {...props}>
        {children}
      </RouteLink>
    )

  if (asButton) {
    return (
      <Wrapper className={styles.Link_button}>
        <Button {...buttonProps}>{children}</Button>
      </Wrapper>
    )
  }

  if (asCard) {
    return (
      <Wrapper className={styles.Link_card}>
        <Card {...cardProps}>{children}</Card>
      </Wrapper>
    )
  }

  return <Wrapper className={styles.Link}>{children}</Wrapper>
}

export default Link
