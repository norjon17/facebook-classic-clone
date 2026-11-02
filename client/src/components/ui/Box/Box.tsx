import type { ReactNode } from 'react'
import styles from './Box.module.scss'

type BoxProps = {
  title?: string
  children: ReactNode
}

export default function Box({ title, children }: BoxProps) {
  return (
    <div className={styles.box}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
