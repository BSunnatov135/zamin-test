import { Container } from '@mui/material'
import { useRouter } from 'next/router'
import BlogTitle from '../BlogTitle'
import styles from './style.module.scss'
import PlayLarge from '/src/assests/icons/playLarge.svg'
import PlaySmall from '/src/assests/icons/playSmall.svg'

export default function Event() {
  const router = useRouter()
  return (
    <Container>
      <div className={styles.main}>
        <BlogTitle
          title='Мероприятие'
          link={{
            title: 'Все',
            path: '/event'
          }}
        />
        <div className={styles.list}>
          <div className={styles.topElement}>
            <div
              className={styles.item}
              onClick={() => router.push('/info/item?key=event')}
            >
              <img src='/images/event1.jpg' />
            </div>
            <div
              className={styles.item}
              onClick={() => router.push('/info/item?key=event')}
            >
              <img src='/images/event2.jpg' />
            </div>
            <div
              className={`${styles.item} ${styles.event}`}
              onClick={() => router.push('/info/item?key=event')}
            >
              <img src='/images/event3.jpg' />
              <PlaySmall/>
            </div>
          </div>
          <div className={styles.bottomElement}>
            <div
              className={`${styles.item} ${styles.event}`}
              onClick={() => router.push('/info/item?key=event')}
            >
              <img src='/images/event4.jpg'/>
              <PlayLarge className={styles.playLarge}/>
              <PlaySmall className={styles.playSmall}/>            
              </div>
            <div
              className={styles.item}
              onClick={() => router.push('/info/item?key=event')}
            >
              <img src='/images/event5.jpg' />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
