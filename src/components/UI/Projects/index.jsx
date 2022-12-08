import { Button, Container } from '@mui/material'
import Link from 'next/link'
import styles from './style.module.scss'
import HeartIcon from 'assests/icons/heart.svg'
import ArrowRightIcon from 'assests/icons/arrowRight.svg'
import ProjectItem from './ProjectItem'
import { projects } from './mockData'
import useTransition from 'next-translate/useTranslation'

const items = [
  {
    title: 'Конкурс на обучение сурдопедагогов языку жестов',
    desc: 'Международный общественный фонд Zamin объявляет конкурс на отбор поставщика для обучения навыкам жестового языка сурдопедагогов 18 специализированных...',
    img: '/images/project1.jpg'
  },
  {
    title: 'Автоматизация мониторинга загрязнения атмосферного...',
    desc: 'При поддержке фонда Zamin и UNEP начат проект Центра гидрометеорологической службы по автоматизации процесса мониторинга атмосферного воздуха...',
    img: '/images/project2.jpg'
  },
  {
    title: 'Благотворительная акция "Sirdaryo, biz yoningdamiz!"',
    desc: 'Частичная или полная потеря слуха лишает детей важного источника информации и ограничивает процесс интеллектуального развития...',
    img: '/images/project3.jpg'
  }
]

export default function Projects() {
  const { t } = useTransition('common')
  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.leftElement}>
            <p>
              <span>
                <HeartIcon />
              </span>
              {t('projects_motto')}
            </p>
            <p className={styles.title}>{t('projects_title')}</p>
            <p className={styles.responsiveTitle}>Наши проекты</p>          
            </div>
          <Link href='/projects'>
            <a className={styles.responsiveLink}>Все <ArrowRightIcon /></a>
          </Link>
          <Link href='/projects'>
            <a className={styles.link}>
              Все проекты <ArrowRightIcon />
            </a>
          </Link>
        </div>
        <div className={styles.list}>
          {projects.slice(0, 3).map((item) => (
            <ProjectItem key={item.img} item={item} />
          ))}
        </div>
        {/* <div className={styles.button}>
          <Button>Все проекты</Button>
        </div> */}
      </div>
    </Container>
  )
}
