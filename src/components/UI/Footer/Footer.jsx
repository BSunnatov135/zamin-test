import styles from "./style.module.scss";
import { Container } from "@mui/material";
import Link from "next/link";
import { Box } from "@mui/system";
import GmailIcon from "assests/icons/gmail.svg";
import TelegramIcon from "assests/icons/telegram.svg";
import InstagramIcon from "assests/icons/instagram.svg";
import FacebookIcon from "assests/icons/facebook.svg";
import YoutubeIcon from "assests/icons/youtubeDark.svg";
import DropIcon from "assests/icons/dropIcon.svg";
import Logo from "assests/icons/logo.svg";
import useTranslation from "next-translate/useTranslation";
import Spheres from "../Header/Menu/ProjectItems/projects";
import scrollToRef from "mixins/scrollToRef";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setScrollSectionName } from "store/scrollFunctionSlice/scrollFunctionSlice";
import useSpheres from "services/spheres";
import useAdverts from "services/advert";
import MobileAccordion from "./Accordion";

export default function Footer() {
  const dispatch = useDispatch();
  const { spheres } = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 3,
    },
  });
  const { isActive } = useAdverts({
    advertIsActive: {},
  });
  const { t } = useTranslation("common");
  const router = useRouter();
  const path = router.asPath;
  const advertsRef = useSelector((state) => state.scrollRef.advertsRef);
  const eventsRef = useSelector((state) => state.scrollRef.eventsRef);
  const year = new Date().getFullYear();
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
    <Box
      sx={{
        background: "#000",
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
                <a className={styles.link}>{t("about")}</a>
              </Link>
              {/* <Link href="/">
                <a>{t("mission")}</a>
              </Link> */}
              {/* <Link href="/about#sphere" scroll={false} passHref legacyBehavior>
                <a>{t("activity")}</a>
              </Link> */}
              {/* <Link href="/">
                <a>{t("funding")}</a>
              </Link> */}
              <Link
                href="/about#board"
                passHref={true}
                scroll={false}
                legacyBehavior
              >
                <a>{t("trust")}</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.subtitle}>
                {t("projects")}
                <DropIcon onClick={() => setOpen((prev) => !prev)} />
              </p>
              {spheres?.data?.response?.map((item) => (
                <Spheres key={item.guid} item={item} id={item.guid} />
              ))}
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
              {isActive?.data == "true" && (
                <Link href="/#news" passHref>
                  <a>{t("advert_title")}</a>
                </Link>
              )}
              {/* <Link href="/gallery">
                <a>{t("gallery")}</a>
              </Link> */}
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
        <MobileAccordion />

        <div className={styles.bottomElement}>
          <p className={styles.subtitle}>
            © Zamin {year}. {t("rights")}
          </p>
          <div className={styles.SocialIcons}>
            <a
              href="https://www.instagram.com/zaminfoundation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/zaminfoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://t.me/zaminfoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </a>
            <a
              href="https://www.youtube.com/@zaminfoundation5308"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </Container>
    </Box>
  );
}
