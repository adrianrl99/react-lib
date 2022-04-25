import { FC } from 'react'

import { classes } from '@/utils/classes'

import styles from './Tabs.module.css'

export type TabPanelProps = {
  className?: string
}

export const TabPanel: FC<TabPanelProps> = ({ children, className }) => (
  <div className={classes(styles.TabPanel, className)}>{children}</div>
)
