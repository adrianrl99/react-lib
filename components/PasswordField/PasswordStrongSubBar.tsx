import { FC, useLayoutEffect, useRef } from 'react'

interface PasswordStrongSubBarProps {
  score: number
  className?: string
}

export const PasswordStrongSubBar: FC<PasswordStrongSubBarProps> = ({
  score,
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    const percent = score <= 100 ? score : 100
    el?.style.setProperty('--password-strong-bar-percent', `${percent}%`)
  }, [score])

  return <span ref={ref} className={className} />
}
