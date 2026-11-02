import type { ComponentProps } from 'react'
import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'signup'

type ButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariant
}

export default function Button({
  variant = 'primary',
  type = 'button',
  className,
  ...rest
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  return <button type={type} className={classes} {...rest} />
}
