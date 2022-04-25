import {
  Children,
  FC,
  isValidElement,
  useContext,
  useLayoutEffect,
  useMemo,
} from 'react'

import { classes } from '@/utils/classes'

import { TabContext } from './TabContext'
import { TabPanel } from './TabPanel'
import styles from './Tabs.module.css'

export type TabPanelsProps = {
  className?: string
}

export const TabPanels: FC<TabPanelsProps> = ({ children, className }) => {
  const { active } = useContext(TabContext)

  useLayoutEffect(() => {
    Children.forEach(children, element => {
      if (!isValidElement(element)) {
        return
      }

      if (element.type !== TabPanel) {
        throw new Error(
          `${
            typeof element.type === 'string' ? element.type : element.type.name
          } is not a <TabPanel> component. All component of <TabPanels> must be a <TabPanel> or <React.Fragment>`,
        )
      }
    })
  }, [children])

  const element = useMemo(
    () => Children.toArray(children).at(active),
    [active, children],
  )

  return <div className={classes(styles.TabPanels, className)}>{element}</div>
}
