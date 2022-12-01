import styles from './style.module.scss'
import { Container } from '@mui/material'
import Link from 'next/link'
import { Box } from '@mui/system'
import GmailIcon from 'assests/icons/gmail.svg'
import LocaionIcon from 'assests/icons/location.svg'
import TelegramIcon from 'assests/icons/telegram.svg'
import InstagramIcon from 'assests/icons/instagram.svg'
import FacebookIcon from 'assests/icons/facebook.svg'
import { Face } from '@mui/icons-material'
import DropIcon from 'assests/icons/dropIcon.svg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from 'assests/icons/logo.svg'

export default function Footer() {
  return (
    <Box
      sx={{
        background: '#000'
      }}
    >
      <Container>
      <div className={styles.logo}><Logo/></div>
        <div className={styles.footer}>
          <div className={styles.list}>
            <div className={styles.box}>
            <p className={styles.subtitle}>О фонде 
              <DropIcon onClick={() => setOpen((prev) => !prev ) }/>
            </p>
              <Link href='/'>
                <a className={styles.link}>О создании</a>
              </Link>
              <Link href='/'>
                <a>Наша миссия</a>
              </Link>
              <Link href='/'>
                <a>Ключевые сферы деятельности</a>
              </Link>
              <Link href='/'>
                <a>Источники финансирование</a>
              </Link>
              <Link href='/'>
                <a>Попечительский совет</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>Наши Проекты
              <DropIcon onClick={() => setOpen((prev) => !prev ) }/>
              </p>
              <Link href='/'>
                <a>Окружающая среда</a>
              </Link>
              <Link href='/'>
                <a>Инновационные технологии в социальной сфере</a>
              </Link>
              <Link href='/'>
                <a>Программа развития образования детей с нарушением слуха</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>Объявления
              <DropIcon/>
              </p>
              <Link href='/'>
                <a>Объявления</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>Медиа
              <DropIcon/>
              </p>
              <Link href='/'>
                <a>Мероприятия</a>
              </Link>
              <Link href='/'>
                <a>Галерея</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>Контакты для предложений:
              
              </p>
              <Link href='/'>
                <a>
                  <GmailIcon />
                  info@zaminfoundation.uz
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.accordionContainer}>
        <div className={styles.accordionWrapper}>
        <Accordion className={styles.accordion} sx={{
    backgroundColor: "#000"
  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.accordionSummary}
          sx={{
            backgroundColor: "black"
          }}
        >
          <Typography className={styles.summaryContent}>О фонде</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>О создании </Typography>
          <Typography>Наша миссия</Typography>
          <Typography>Ключевые сферы деятельности</Typography>
          <Typography>Источники финансирование</Typography>
          <Typography>Попечительский совет</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.accordionSummary}
        >
          <Typography  className={styles.summaryContent}>Наши Проекты</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>Окружающая среда </Typography>
          <Typography>Инновационные технологии в социальной сфере</Typography>
          <Typography>Программа развития образования детей с нарушением слуха</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.accordionSummary}
        >
          <Typography className={styles.summaryContent}>Объявления</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>Объявления</Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.accordionSummary}
        >
          <Typography className={styles.summaryContent}>Медиа</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>Мероприятия</Typography>
          <Typography>Галерея</Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className={styles.box}>
              <p className={styles.subtitle}>Контакты для предложений:
              </p>
              <Link href='/'>
                <a>
                  <GmailIcon />
                  info@zaminfoundation.uz
                </a>
              </Link>
              <p className={styles.subtitle}>Соц-сети:</p>
              <div className={styles.accordionIcons}>
              <Link href='/'>
              <div className={styles.SocialIcons}>
                <InstagramIcon/>
                <FacebookIcon/>
                <TelegramIcon/>
              </div>
              </Link>
              </div>
            </div>

        </div>
        <div className={styles.bottomElement}>
          <p className={styles.subtitle}>©Zamin 2022. Все права защищены</p>
          <div className={styles.SocialIcons}>
            <InstagramIcon/>
            <FacebookIcon/>
            <TelegramIcon/>
          </div>
        </div>
      </Container>
    </Box>
  )
}
