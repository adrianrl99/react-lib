import { Children, FC, isValidElement, useLayoutEffect, useState } from 'react'

import { classes } from '@/utils/classes'

import { TabContext } from './TabContext'
import { TabPanels } from './TabPanels'
import { Tabs } from './Tabs'
import styles from './Tabs.module.css'

export type TabRootProps = {
  className?: string
  fullWidth?: boolean
}

export const TabRoot: FC<TabRootProps> = ({
  children,
  className,
  fullWidth,
}) => {
  const [active, setActive] = useState(0)

  useLayoutEffect(() => {
    Children.forEach(children, element => {
      if (!isValidElement(element)) {
        return
      }

      if (element.type !== Tabs && element.type !== TabPanels) {
        throw new Error(
          `${
            typeof element.type === 'string' ? element.type : element.type.name
          } is not a <Tabs> or <TabPanels> component. All component of <TabRoot> must be a <Tabs> or <TabPanels> or <React.Fragment>`,
        )
      }
    })

    if (
      Children.count(
        Children.map(children, element => {
          if (!isValidElement(element)) {
            return
          }

          if (element.type === Tabs) {
            return element
          }
        }),
      ) > 1
    ) {
      throw new Error('<TabRoot> can only have one <Tabs> component')
    }

    if (
      Children.count(
        Children.map(children, element => {
          if (!isValidElement(element)) {
            return
          }

          if (element.type === TabPanels) {
            return element
          }
        }),
      ) > 1
    ) {
      throw new Error('<TabRoot> can only have one <TabPanels> component')
    }

    let tabs = 0
    let panels = 0
    Children.forEach(children, element => {
      if (!isValidElement(element)) {
        return
      }

      const count = Children.count(element.props.children)

      if (element.type === Tabs) tabs = count
      if (element.type === TabPanels) panels = count
    })

    if (tabs !== panels) {
      throw new Error('<Tab> count is not equal to <TabPanel> count')
    }
  }, [children])

  return (
    <TabContext.Provider value={{ active, setActive }}>
      <div
        className={classes(
          styles.TabRoot,
          {
            [styles.TabRoot_fullWidth]: fullWidth,
          },
          className,
        )}
      >
        {children}
      </div>
    </TabContext.Provider>
  )
}
