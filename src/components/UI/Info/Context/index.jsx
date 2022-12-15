import styles from './style.module.scss'
import { Container } from '@mui/material'
import { ArrowRight } from 'components/UI/svg'

export default function Banner({ contents, router, item }) {
  return (
    <Container>
      <div className={styles.main}>
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
