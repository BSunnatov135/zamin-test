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
import useTranslation from "next-translate/useTranslation";
import useProjects from "services/projects";
import Spheres from "../Header/Menu/ProjectItems/projects";
import scrollToRef from "mixins/scrollToRef";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setScrollSectionName } from "store/scrollFunctionSlice/scrollFunctionSlice";

export default function Footer() {
  const dispatch = useDispatch();
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 3,
    },
  });
  const { t } = useTranslation("common");
  const router = useRouter();
  const path = router.asPath;
  const advertsRef = useSelector((state) => state.scrollRef.advertsRef);
  const eventsRef = useSelector((state) => state.scrollRef.eventsRef);

  function handleRouterActions(status) {
    if (status === "event") {
      path === "/" ? scrollTo(eventsRef) : router.push("/event");
    }

    if (status === "advert") {
      path === "/" ? scrollTo(advertsRef) : router.push("/news");
    }

    function scrollTo(where) {
      scrollToRef(0, where - 100);
    }
    function scrrollHome() {
      router.push("/", undefined, { scroll: false });
    }
    dispatch(setScrollSectionName(status));
  }

  return (
    <Box
      sx={{
        background: "#000",
        position: "absolute",
        bottom: "auto",
        width: "100%",
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
              <Link href="/about">
                <a className={styles.link}>{t("creation")}</a>
              </Link>
              {/* <Link href="/">
                <a>{t("mission")}</a>
              </Link> */}
              <Link href="/about#sphere" scroll={false} passHref legacyBehavior>
                <a>{t("activity")}</a>
              </Link>
              {/* <Link href="/">
                <a>{t("funding")}</a>
              </Link> */}
              <Link href="/about#board" scroll={false} passHref legacyBehavior>
                <a>{t("trust")}</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>
                {t("projects")}
                <DropIcon onClick={() => setOpen((prev) => !prev)} />
              </p>
              {projects?.data?.response?.map((item) => (
                <Spheres key={item.guid} item={item} />
              ))}
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>
                {t("advert_title")}
                <DropIcon />
              </p>
              <Link href="/">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleRouterActions("advert");
                  }}
                >
                  {t("advert_title")}
                </a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>
                {t("media")}
                <DropIcon />
              </p>
              <Link href="/">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleRouterActions("event");
                  }}
                >
                  {t("event_title")}
                </a>
              </Link>
              <Link href="/gallery">
                <a>{t("gallery")}</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>{t("contact")}</p>
              <Link href="mailto:info@zaminfoundation.uz">
                <a href="mailto:info@zaminfoundation.uz">
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
                <Link href="/about">
                  <Typography>{t("creation")}</Typography>
                </Link>
                {/* <Typography>{t("mission")}</Typography> */}
                <Link
                  href="/about#event"
                  scroll={false}
                  passHref
                  legacyBehavior
                >
                  <Typography>{t("activity")}</Typography>
                </Link>
                {/* <Typography>{t("funding")}</Typography> */}
                <Link
                  href="/about#board"
                  scroll={false}
                  passHref
                  legacyBehavior
                >
                  <Typography>{t("trust")}</Typography>
                </Link>
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
                {projects?.data?.response?.map((item) => (
                  <Spheres key={item.guid} item={item} />
                ))}
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles.accordionSummary}
              >
                <Typography>
                  <a
                    className={styles.summaryContent}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRouterActions("advert");
                    }}
                  >
                    {t("advert_title")}
                  </a>
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
                <Typography className={styles.summaryContent}>
                  {t("media")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetails}>
                <Typography>
                  {" "}
                  <a
                    className={styles.summaryContent}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRouterActions("event");
                    }}
                  >
                    {t("event_title")}
                  </a>
                </Typography>
                <Typography>{t("gallery")}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className={styles.box}>
            <p className={styles.subtitle}>{t("contact")}</p>
            <Link href="mailto:info@zaminfoundation.uz">
              <a href="mailto:info@zaminfoundation.uz">
                <GmailIcon />
                info@zaminfoundation.uz
              </a>
            </Link>
            <p className={styles.subtitle}>{t("sns")}</p>
            <div className={styles.accordionIcons}>
              <div className={styles.SocialIcons}>
                <a href="https://www.instagram.com/zaminfoundation/">
                  <InstagramIcon />
                </a>
                <a href="https://www.facebook.com/zaminfoundation">
                  <FacebookIcon />
                </a>
                <a href="https://t.me/zaminfoundation">
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomElement}>
          <p className={styles.subtitle}>{t("rights")}</p>
          <div className={styles.SocialIcons}>
            <a href="https://www.instagram.com/zaminfoundation/">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/zaminfoundation">
              <FacebookIcon />
            </a>
            <a href="https://t.me/zaminfoundation">
              <TelegramIcon />
            </a>
          </div>
        </div>
      </Container>
    </Box>
  );
}
