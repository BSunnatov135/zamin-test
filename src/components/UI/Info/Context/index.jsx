import styles from './style.module.scss'
import { Container } from '@mui/material'
import { ArrowRight } from 'components/UI/svg'

export default function Banner({ contents, router, item }) {
  return (
    <Container>
      <div className={styles.main}>
        {contents.map((content) => (
          <div key={item?.id} className={styles.content}>
            <h3 className={styles.content__title}>{item?.name}</h3>
            {/* {content?.textList?.map((text) => (
            //  <p dangerouslySetInnerHTML={{
            //   __html: item.description
            // }}></p>
            ))} */}
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
