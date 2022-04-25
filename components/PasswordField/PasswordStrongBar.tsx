import { FC, useCallback } from 'react'

import styles from './PasswordField.module.css'
import { PasswordStrongSubBar } from './PasswordStrongSubBar'

interface PasswordStrongBarProps {
  score: number
}

const SUB_BARS = [
  styles.PasswordStrongBar_weak,
  styles.PasswordStrongBar_normal,
  styles.PasswordStrongBar_good,
  styles.PasswordStrongBar_strong,
]

const N_SUB_BARS = SUB_BARS.length

export const PasswordStrongBar: FC<PasswordStrongBarProps> = ({ score }) => {
  const calculateSubScore = useCallback(
    (index: number) => {
      const full = Math.floor((score * N_SUB_BARS) / 100)
      const perc = (score % (100 / N_SUB_BARS)) * N_SUB_BARS
      return index < full ? 100 : index > full ? 0 : perc
    },
    [score],
  )

  return (
    <span className={styles.PasswordStrongBar}>
      {SUB_BARS.map((subBar, index) => (
        <PasswordStrongSubBar
          score={calculateSubScore(index)}
          key={index}
          className={subBar}
        />
      ))}
    </span>
  )
}
