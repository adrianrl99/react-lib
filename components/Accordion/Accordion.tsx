import { FC, ReactNode, useMemo, useState } from 'react'

import { Card } from '@/components/Card'
import { classes } from '@/utils/classes'

import styles from './Accordion.module.css'

export type AccordionItem = {
  title: ReactNode
  content: ReactNode
  className?: string
}

export type AccordionState = AccordionItem & {
  id: string | number
  expanded: boolean
}

export type AccordionProps = {
  /**
   * Accordion items
   */
  items: AccordionItem[]
  /**
   * Initial expanded items indexes
   *
   * If `maxExpandedCount` is set to `1` and `initialExpanded` length is larger than `1`, only the first item will be expanded
   *
   * If `maxExpandedCount` is set to `0`, any item will be expanded
   *
   * If `maxExpandedCount` is set to `-1`, all values of `initialExpanded` will be expanded
   *
   * Default: []
   */
  initialExpanded?: number[]
  /**
   * Maximum number of expanded items allowed
   *
   * If `-1`, all items can be expanded
   *
   * If `0`, any item can be expanded
   *
   * If `1`, only one item can be expanded
   *
   * Default: 1
   */
  maxExpandedCount?: 1 | 0 | -1
}

export const Accordion: FC<AccordionProps> = ({
  items,
  maxExpandedCount = 1,
  initialExpanded = [],
}) => {
  const initialExpandedFixed = useMemo(
    () =>
      maxExpandedCount === 1
        ? [initialExpanded.at(0)]
        : maxExpandedCount === 0
        ? []
        : initialExpanded,
    [initialExpanded, maxExpandedCount],
  )

  const [state, setState] = useState<AccordionState[]>(
    items.map((el, index) => ({
      ...el,
      expanded: initialExpandedFixed?.includes(index) ?? false,
      id: index,
    })),
  )
  const handleCollapse = (id: string | number) =>
    setState(state.map(el => (el.id !== id ? el : { ...el, expanded: false })))

  const handleExpand = (id: string | number) => {
    if (!canForceExpand && canExpand) {
      setState(state.map(el => (el.id !== id ? el : { ...el, expanded: true })))
    } else if (canForceExpand) {
      const lastExpandId = state.filter(el => el.expanded).at(-1)?.id
      setState(
        state.map(el => {
          if (el.id === lastExpandId) {
            return { ...el, expanded: false }
          } else if (el.id === id) {
            return { ...el, expanded: true }
          }

          return el
        }),
      )
    }
  }

  const canForceExpand = useMemo(
    () => maxExpandedCount === 1,
    [maxExpandedCount],
  )
  const canExpand = useMemo(() => {
    if (maxExpandedCount === -1) return true
    if (maxExpandedCount === 0) return false
    return state.filter(el => el.expanded).length < maxExpandedCount
  }, [maxExpandedCount, state])

  return (
    <div className={styles.Accordion}>
      {state.map(({ title, content, className, id, expanded }) => (
        <Card
          key={id}
          className={classes(styles.AccordionElement, className, {
            [styles.AccordionElement_expanded]: expanded,
          })}
        >
          <button
            className={styles.AccordionElement_title}
            onClick={() => (expanded ? handleCollapse(id) : handleExpand(id))}
          >
            {title}
          </button>
          {content && (
            <div className={styles.AccordionElement_body}>{content}</div>
          )}
        </Card>
      ))}
    </div>
  )
}
