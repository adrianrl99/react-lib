import { FC, ReactNode } from 'react'

import { Card } from '@/components/Card'

import { Markdown } from '../Markdown'
import styles from './Table.module.css'

export type TableProps = {
  columns: string[]
  data: ReactNode[][]
  parse?: boolean
}

export const Table: FC<TableProps> = ({ columns, data, parse = true }) => (
  <Card className={styles.Table}>
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={`${index}-${column}`}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={`${rowIndex}-${row}`}>
            {row.map((cell, cellIndex) => (
              <td key={`${rowIndex}-${row}_${cellIndex}-${cell}`}>
                {parse ? <Markdown>{cell}</Markdown> : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </Card>
)
