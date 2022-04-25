import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  useLayoutEffect,
  useMemo,
} from 'react'

import { Card } from '@/components/Card'
import { classes } from '@/utils/classes'

import { Tab } from './Tab'
import styles from './Tabs.module.css'

export type TabsProps = {
  fullWidth?: boolean
  centered?: boolean
  className?: string
}

export const Tabs: FC<TabsProps> = ({
  children,
  fullWidth,
  centered,
  className,
}) => {
  useLayoutEffect(() => {
    Children.forEach(children, element => {
      if (!isValidElement(element)) {
        return
      }

      if (element.type !== Tab) {
        throw new Error(
          `${
            typeof element.type === 'string' ? element.type : element.type.name
          } is not a <Tab> component. All component of <Tabs> must be a <Tab> or <React.Fragment>`,
        )
      }
    })
  }, [children])

  const element = useMemo(
    () =>
      Children.map(children, (element, index) => {
        if (!isValidElement(element)) {
          return
        }
        return cloneElement(element, { index, fullWidth })
      }),
    [children, fullWidth],
  )

  return (
    <Card
      className={classes(
        styles.Tabs,
        {
          [styles.Tabs_centered]: centered,
        },
        className,
      )}
    >
      {element}
    </Card>
  )
}
