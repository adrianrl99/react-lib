import { FC, HTMLAttributes } from 'react'

import { Paper } from '@/components/Paper'
import { classes } from '@/utils/classes'

import styles from './Card.module.css'

export type CardProps = HTMLAttributes<HTMLDivElement>

export const Card: FC<CardProps> = ({ children, className, ...props }) => (
  <Paper className={classes(styles.Card, className)} {...props}>
    {children}
  </Paper>
)
