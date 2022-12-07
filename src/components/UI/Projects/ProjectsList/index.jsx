import { Container } from '@mui/material'
import styles from './style.module.scss'
import { projects } from '../mockData'
import ProjectItem from '../ProjectItem'

const items = [
  {
    title: 'Общенациональный проект «Зеленое пространство»',
    desc: 'Частичная или полная потеря слуха лишает детей важного источника информации и ограничивает процесс интеллектуального развития...',
    img: '/images/pr1.png'
  },
  {
    title: 'Общенациональный проект «Зеленое пространство»',
    desc: 'Частичная или полная потеря слуха лишает детей важного источника информации и ограничивает процесс интеллектуального развития...',
    img: '/images/pr2.png'
  },
  {
    title: 'Общенациональный проект «Зеленое пространство»',
    desc: 'Частичная или полная потеря слуха лишает детей важного источника информации и ограничивает процесс интеллектуального развития...',
    img: '/images/pr3.png'
  },
  {
    title: 'Общенациональный проект «Зеленое пространство»',
    desc: 'Частичная или полная потеря слуха лишает детей важного источника информации и ограничивает процесс интеллектуального развития...',
    img: '/images/pr4.png'
  },
  {
    title: 'Общенациональный проект «Зеленое пространство»',
    desc: 'Частичная или полная потеря слуха лишает детей важного источника информации и ограничивает процесс интеллектуального развития...',
    img: '/images/pr5.png'
  },
  {
    title: 'Общенациональный проект «Зеленое пространство»',
    desc: 'Частичная или полная потеря слуха лишает детей важного источника информации и ограничивает процесс интеллектуального развития...',
    img: '/images/pr6.png'
  }
]

export default function ProjectsPage() {
  return (
    <Container>
      <div className={styles.main}>
        <h2 className={styles.sectionTitle}>Все проекты</h2>
        <div className={styles.list}>
          {projects.map((item) => (
            <ProjectItem key={item.img} item={item} />
          ))}
        </div>
      </div>
    </Container>
  )
}
