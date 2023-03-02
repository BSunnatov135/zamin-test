import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import styles from "./style.module.scss";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import useSpheres from "services/spheres";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useAdverts from "services/advert";
import Spheres from "../../Header/Menu/ProjectItems/projects";
import GmailIcon from "assests/icons/gmail.svg";
import TelegramIcon from "assests/icons/telegram.svg";
import InstagramIcon from "assests/icons/instagram.svg";
import FacebookIcon from "assests/icons/facebook.svg";
import YoutubeIcon from "assests/icons/youtubeDark.svg";
import scrollToRef from "mixins/scrollToRef";
import { useRouter } from "next/router";

export default function MobileAccordion(handleRouterActions) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const path = router.asPath;
  const { spheres } = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 3,
    },
  });
  const { isActive } = useAdverts({
    advertIsActive: {},
  });
  function handleRouterActions(status) {
    if (status === "event") {
      path === "/" ? scrollTo(eventsRef) : router.push("/event");
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
              <Typography>{t("about")}</Typography>
            </Link>
            {/* <Typography>{t("mission")}</Typography> */}
            {/* <Link
                  href="/about#event"
                  scroll={false}
                  passHref
                  legacyBehavior
                >
                  <Typography>{t("activity")}</Typography>
                </Link> */}
            {/* <Typography>{t("funding")}</Typography> */}
            <Link href="/about#board" scroll={false} passHref legacyBehavior>
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
            {spheres?.data?.response?.map((item) => (
              <Spheres key={item.guid} item={item} id={item.guid} />
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
            {isActive?.data == "true" && (
              <Typography>
                {" "}
                <a className={styles.summaryContent} href="/#news">
                  {t("advert_title")}
                </a>
              </Typography>
            )}
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
            <a href="https://www.youtube.com/@zaminfoundation5308">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
