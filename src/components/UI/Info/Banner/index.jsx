import styles from './style.module.scss'

export default function Banner() {
  return (
    <>
      <h2 className={styles.sectionTitle}>Автоматизация мониторинга загрязнения атмосферного воздуха</h2>
      <div className={styles.banner}>
        <img className={styles.banner__main_img} src='/images/moon.png' alt='moon' />
      </div>
    </>
  )
}
