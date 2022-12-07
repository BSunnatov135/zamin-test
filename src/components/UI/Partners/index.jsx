import { Container } from '@mui/material'
import styles from './style.module.scss'
import { AcerIcon, AsusIcon, MiIcon, SonyIcon, VivoIcon } from '../svg'

const items = [
  <AcerIcon/>,
  <SonyIcon/>,
  <AsusIcon/>,
  <MiIcon/>,
  <VivoIcon/>,
  <VivoIcon/>
]

export default function Partners() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {items.map((item, index) =>
            <div key={index + 'key'} className={styles.item}>
              {item}
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}
