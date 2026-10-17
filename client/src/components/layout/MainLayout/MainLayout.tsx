import { Outlet } from 'react-router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './MainLayout.module.scss'

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
