import styles from './style.module.scss'

export default function Banner({item}) {
  return (
    <>
      <h2 className={styles.sectionTitle}>{item?.name}</h2>
      <div className={styles.banner}>
        <img className={styles.banner__main_img} src={item?.photo} alt={item?.name} />
      </div>
    </>
  )
}
