import styles from "./style.module.scss";
import { Container } from "@mui/material";
import Link from "next/link";
import { Box } from "@mui/system";
import GmailIcon from "assests/icons/gmail.svg";
import TelegramIcon from "assests/icons/telegram.svg";
import InstagramIcon from "assests/icons/instagram.svg";
import FacebookIcon from "assests/icons/facebook.svg";
import DropIcon from "assests/icons/dropIcon.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "assests/icons/logo.svg";
import useTransition from "next-translate/useTranslation";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <Box
      sx={{
        background: "#000",
      }}
    >
      <Container>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.footer}>
          <div className={styles.list}>
            <div className={styles.box}>
              <p className={styles.subtitle}>
                {t("about_fond")}
                <DropIcon onClick={() => setOpen((prev) => !prev)} />
              </p>
              <Link href="/">
                <a className={styles.link}>{t("creation")}</a>
              </Link>
              <Link href="/">
                <a>{t("mission")}</a>
              </Link>
              <Link href="/">
                <a>{t("activity")}</a>
              </Link>
              <Link href="/">
                <a>{t("funding")}</a>
              </Link>
              <Link href="/">
                <a>{t("trust")}</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>
                {t("projects")}
                <DropIcon onClick={() => setOpen((prev) => !prev)} />
              </p>
              <Link href="/">
                <a>{t("environment")}</a>
              </Link>
              <Link href="/">
                <a>{t("innovation")}</a>
              </Link>
              <Link href="/">
                <a>{t("program")}</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>
                {t("advert_title")}
                <DropIcon />
              </p>
              <Link href="/">
                <a>{t("advert_title")}</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>
                {t("media")}
                <DropIcon />
              </p>
              <Link href="/">
                <a>{t("event_title")}</a>
              </Link>
              <Link href="/">
                <a>{t("gallery")}</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>{t("contact")}</p>
              <Link href="/">
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
            <Accordion
              className={styles.accordion}
              sx={{
                backgroundColor: "#000",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles.accordionSummary}
                sx={{
                  backgroundColor: "black",
                }}
              >
                <Typography className={styles.summaryContent}>
                  {t("about_fond")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetails}>
                <Typography>{t("creation")}</Typography>
                <Typography>{t("mission")}</Typography>
                <Typography>{t("activity")}</Typography>
                <Typography>{t("funding")}</Typography>
                <Typography>{t("trust")}</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles.accordionSummary}
              >
                <Typography className={styles.summaryContent}>
                  {t("projects")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetails}>
                <Typography>{t("environment")} </Typography>
                <Typography>{t("innovation")}</Typography>
                <Typography>{t("program")}</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles.accordionSummary}
              >
                <Typography className={styles.summaryContent}>
                  {t("advert_title")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetails}>
                <Typography>{t("advert_title")}</Typography>
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
                <Typography>{t("event_title")}</Typography>
                <Typography>{t("gallery")}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className={styles.box}>
            <p className={styles.subtitle}>{t("contact")}</p>
            <Link href="/">
              <a>
                <GmailIcon />
                info@zaminfoundation.uz
              </a>
            </Link>
            <p className={styles.subtitle}>Соц-сети:</p>
            <div className={styles.accordionIcons}>
              <Link href="/">
                <div className={styles.SocialIcons}>
                  <a href="https://www.instagram.com/zaminfoundation/" target="_blank"> <InstagramIcon /></a>
                  <a href="https://www.facebook.com/zaminfoundation" target="_blank"> <FacebookIcon /></a>
                  <a href="https://t.me/zaminfoundation" target="_blank"><TelegramIcon /></a>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottomElement}>
          <p className={styles.subtitle}>©Zamin 2022. Все права защищены</p>
          <div className={styles.SocialIcons}>
            <InstagramIcon />
            <FacebookIcon />
            <TelegramIcon />
          </div>
        </div>
      </Container>
    </Box>
  );
}
