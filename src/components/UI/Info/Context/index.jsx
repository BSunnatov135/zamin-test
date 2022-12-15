import styles from './style.module.scss'
import { Container } from '@mui/material'
import { ArrowRight } from 'components/UI/svg'

export default function Banner({ contents, router, item }) {
  return (
    <Container>
      <div className={styles.main}>
      <h3 className={styles.content__title}>{item?.name}</h3>
      <p dangerouslySetInnerHTML={{
                __html: item?.description
              }}/>
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
