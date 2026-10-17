import styles from './Home.module.scss'

type SidebarBox = {
  title: string
  text: string
}

const leftMenu = ['News Feed', 'Messages', 'Events', 'Photos', 'Friends']

const rightBoxes: SidebarBox[] = [
  { title: 'Requests', text: 'No new requests.' },
  { title: 'Suggestions', text: 'People you may know will appear here.' }
]

export default function Home() {
  return (
    <div className={styles.home}>
      <aside className={styles.left}>
        <ul className={styles.menu}>
          {leftMenu.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </aside>

      <section className={styles.feed}>
        <h2 className={styles.title}>News Feed</h2>
        <p>Posts from your friends will show up here.</p>
      </section>

      <aside className={styles.right}>
        {rightBoxes.map((item) => (
          <div key={item.title} className={styles.box}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </aside>
    </div>
  )
}
