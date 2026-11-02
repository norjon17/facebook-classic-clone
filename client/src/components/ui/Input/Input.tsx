import { useId, type ComponentProps } from 'react'
import styles from './Input.module.scss'

type InputProps = ComponentProps<'input'> & {
  label?: string
  labelPosition?: 'top' | 'left'
}

export default function Input({
  label,
  labelPosition = 'top',
  id,
  className,
  ...rest
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const inputClass = [styles.input, className].filter(Boolean).join(' ')

  return (
    <div className={`${styles.field} ${styles[labelPosition]}`}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input id={inputId} className={inputClass} {...rest} />
    </div>
  )
}
