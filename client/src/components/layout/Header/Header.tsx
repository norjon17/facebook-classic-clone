import { Link } from 'react-router'
import styles from './Header.module.scss'
import type { LinkType } from '../../../types'

const mainNav: LinkType[] = [
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profile' },
  { label: 'Friends', to: '/friends' },
  { label: 'Inbox', to: '/inbox' }
]

const accountNav: LinkType[] = [
  { label: 'Settings', to: '/settings' },
  { label: 'Logout', to: '/logout' }
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          classicbook
        </Link>

        <nav className={styles.nav}>
          {mainNav.map((item) => (
            <Link to={item.to} key={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>

        <input className={styles.search} type="text" placeholder="Search" aria-label="Search" />

        <nav className={`${styles.nav} ${styles.account}`}>
          {accountNav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
