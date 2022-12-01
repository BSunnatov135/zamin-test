import { Container } from '@mui/material'
import styles from './style.module.scss'

const items = [
  '/logos/acer.svg',
  '/logos/sony.svg',
  '/logos/asus.svg',
  '/logos/mi.svg',
  '/logos/vivo.svg',
  '/logos/vivo.svg'
]

export default function Partners() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {items.map((item, index) => (
            <div key={index + 'key'} className={styles.item}>
              <img src={item} alt='asus logo' />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
