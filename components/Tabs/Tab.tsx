import { FC, useContext, useMemo } from 'react'

import { Button } from '@/components/Button'
import { classes } from '@/utils/classes'

import { TabContext } from './TabContext'
import styles from './Tabs.module.css'

export type TabProps = {
  index?: number
  className?: string
  fullWidth?: boolean
}

export const Tab: FC<TabProps> = ({
  children,
  index,
  fullWidth,
  className,
}) => {
  const { active, setActive } = useContext(TabContext)

  const isActive = useMemo(() => active === index, [active, index])

  const handleActive = () => {
    if (index !== undefined) setActive(index)
  }

  return (
    <Button
      onClick={handleActive}
      className={classes(
        styles.Tab,
        {
          [styles.Tab_active]: isActive,
          [styles.Tab_fullWidth]: fullWidth,
        },
        className,
      )}
      variant="text"
      active={isActive}
    >
      {children}
    </Button>
  )
}
