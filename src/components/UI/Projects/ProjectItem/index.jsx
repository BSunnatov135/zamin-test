import styles from './style.module.scss'
import Link from 'next/link'

export default function ProjectItem({ item }) {
  return (
    <div className={styles.item} key={item.img}>
      <Link href={`/info/${item.title}`}>
        <a>
          <div className={styles.img}>
            <img src={item.img} alt={item.title} />
          </div>
          <div className={styles.body}>
            <p>{item.title}</p>
            <p>{item.desc || item.sub_desc}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}
