import { Link } from 'react-router'
import styles from './Footer.module.scss'
import type { LinkType } from '../../../types'

const footerLinks: LinkType[] = [
  { label: 'About', to: '/about' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Help', to: '/help' }
]
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>classicbook © {year}</span>
      <nav className={styles.links}>
        {footerLinks.map((item) => (
          <Link to={item.to} key={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}
