import styles from './style.module.scss'
import Link from 'next/link'

export default function ProjectItem({ item }) {
  return (
    <div className={styles.item} key={item.img}>
      <Link href={`/info/${item.guid}`}>
        <a className={styles.item__content}>
          <div className={styles.img}>
            <img src={item.photo} alt={item.name} />
          </div>
          <div className={styles.body}>
            <p>{item.name}</p>
            <p dangerouslySetInnerHTML={{
              __html: item.description
            }}></p>
          </div>
        </a>
      </Link>
    </div>
  )
}
