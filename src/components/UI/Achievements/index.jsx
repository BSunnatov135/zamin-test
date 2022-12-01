import { Container } from '@mui/material'
import Link from 'next/link'
import styles from './style.module.scss'
import ArrowRight from 'assests/icons/narrowRight.svg'
import { Box } from '@mui/system'

const items = [
  {
    title: '120 млрд',
    desc: 'Общая благотворительная поддержка'
  },

  {
    title: '30+',
    desc: 'Установленных автоматических станции мониторинга воздуха'
  },
  {
    title: '2+',
    desc: 'операций кохлеарной имплантации ежегодно'
  },
  {
    title: '55+',
    desc: 'запущенных проектов'
  },
  {
    title: '5000',
    desc: 'карт были переданы нуждающимся женщинам'
  }
]

export default function Achievements() {
  return (
    <Box
      sx={{
        background: '#09999a'
      }}
    >
      <Container>
        <div className={styles.main}>
          <h2>Наши достижения</h2>
          <div className={styles.list}>
            {items.map((item, index) => (
              <div key={index + 'key'} className={styles.item}>
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Box>
  )
}
