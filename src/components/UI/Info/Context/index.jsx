import styles from './style.module.scss'
import { Container } from '@mui/material'
import { ArrowRight } from 'components/UI/svg'

export default function Banner({ contents, router }) {
  return (
    <Container>
      <div className={styles.main}>
        {contents.map((content) => (
          <div key={content.title} className={styles.content}>
            <h3 className={styles.content__title}>{content.title}</h3>
            {content?.textList?.map((text) => (
              <p key={text.text} className={styles.content__text}>
                {text.text}
              </p>
            ))}
          </div>
        ))}
        {!router.query.key && (
          <p className={styles.link}>
            <span>Сделайте пожертвование</span>
            <ArrowRight />
          </p>
        )}
      </div>
    </Container>
  )
}
