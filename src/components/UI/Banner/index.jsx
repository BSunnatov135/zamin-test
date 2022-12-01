import { Container } from '@mui/material'
import Link from 'next/link'
import styles from './style.module.scss'
import LearnMoreIcon from 'assests/icons/learnMore.svg'
import PlayIcon from 'assests/icons/play.svg'
import PauseIcon from 'assests/icons/pause.svg'
import useTransition from 'next-translate/useTranslation'
import { useState } from 'react'
import { useRef } from 'react'

export default function Banner() {
  const { t } = useTransition('common')
  const [isPlay, setIsPlay] = useState(false)
  const videoRef = useRef()
  const playVideo = () => {
    videoRef.current.play()
    setIsPlay(false)
  }

  const pauseVideo = () => {
    videoRef.current.pause()
    setIsPlay(true)
  }

  return (
    <>
      <div className={styles.banner}>
        <video autoPlay muted loop playsInline ref
        ={videoRef}>
          <source src='/video/banner.mp4' type='video/mp4' />
        </video>
        <Container
          sx={{
            height: '100%'
          }}
        >
          <div className={styles.content}>
            <h1>{t('banner_title')}</h1>
            <Link href='/'>
              <a>
                <LearnMoreIcon />
                {t('learn_more')}
              </a>
            </Link>
          </div>
        </Container>
        <div className={styles.play} onClick={isPlay ? playVideo : pauseVideo}>
          {!isPlay ? <PauseIcon /> : <PlayIcon />}
        </div>
      </div>
    </>
  )
}
