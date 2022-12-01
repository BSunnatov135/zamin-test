import { Container } from '@mui/material'
import Link from 'next/link'
import BlogTitle from '../BlogTitle'
import styles from './style.module.scss'
import ArrowRight from 'assests/icons/narrowRight.svg'

const items = [
  {
    title: 'Междугородние трудовые поездки. Обмен опытом.',
    desc: 'Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...'
  },
  {
    title: 'Междугородние трудовые поездки. Обмен опытом.',
    desc: 'Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...'
  },
  {
    title: 'Междугородние трудовые поездки. Обмен опытом.',
    desc: 'Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...'
  },
  {
    title: 'Междугородние трудовые поездки. Обмен опытом.',
    desc: 'Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...'
  },
  {
    title: 'Междугородние трудовые поездки. Обмен опытом.',
    desc: 'Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...'
  },
  {
    title: 'Междугородние трудовые поездки. Обмен опытом.',
    desc: 'Я хочу внести вклад в будущее нашей страны со своими сверстниками и друзьями плечом к плечу. Отвага и знания - это путь в прекрасное будущее. Вперёд друзья за мечтой в светлое буду ...'
  }
]

export default function Advert() {
  return (
    <Container>
      <div className={styles.main}>
        <BlogTitle title='Объявления' />
        <div className={styles.list}>
          {items.map((item, index) => (
            <div key={index + 'key'} className={styles.item}>
              <p>{item.title}</p>
              <p>{item.desc}</p>
              <Link href='/'>
                <a>
                  Подробнее <ArrowRight />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
