import { Container } from "@mui/material";
import classNames from "classnames";
import Link from "next/link";
import styles from "./style.module.scss";
import ArrowRight from "/src/assests/icons/narrowRight.svg";
import useTranslation from "next-translate/useTranslation";
import Projects from "./ProjectItems/projects";
import useProjects from "services/projects";
import scrollToRef from "mixins/scrollToRef";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setScrollSectionName } from "store/scrollFunctionSlice/scrollFunctionSlice";

export default function Menu({ open, menuRef, handleClose, handleLogin }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const path = router.asPath;
  const advertsRef = useSelector((state) => state.scrollRef.advertsRef);
  const eventsRef = useSelector((state) => state.scrollRef.eventsRef);
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 3,
    },
  });

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
    dispatch(setScrollSectionName(status));
  }

  return (
    <>
      <div
        ref={menuRef}
        className={classNames(styles.menu, {
          [styles.open]: open,
        })}
      >
        <Container>
          <div className={styles.element}>
            <div className={styles.box}>
              <p className={styles.title}>{t("about_fond")}</p>
              <Link href="/about">
                <a
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  {t("creation")}
                </a>
              </Link>
              {/* <Link href="/">
                <a
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  {t("mission")}
                </a>
              </Link> */}
              <Link href="/about#sphere" scroll={false}>
                <a
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  {t("activity")}
                </a>
              </Link>
              {/* <Link href="/">
                <a
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  {t("funding")}
                </a>
              </Link> */}
              <Link href="/about#board" scroll={false}>
                <a
                  className={styles.box_bottom}
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  {t("trust")}
                </a>
              </Link>
              <p className={styles.title}>{t("advert_title")}</p>
              <Link href="/">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose(e);
                    handleRouterActions("advert");
                  }}
                >
                  {t("advert_title")}
                </a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.title}>{t("projects")}</p>
              {projects?.data?.response?.map((item) => (
                <Projects key={item.guid} item={item} />
              ))}
              <Link href="/">
                <a
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  <p className={`${styles.donation} ${styles.title}`}>
                    {t("donate")} <ArrowRight />
                  </p>
                </a>
              </Link>
              <p className={styles.title}>{t("contacts")}</p>
              <Link href="mailto:info@zaminfoundation.uz">
                <div className={styles.emailContainer}>
                  <p className={styles.email}>Email:</p>
                  <a
                    href="mailto:info@zaminfoundation.uz"
                    onClick={(e) => {
                      handleClose(e);
                    }}
                  >
                    info@zaminfoundation.uz
                  </a>
                </div>
              </Link>
              <Link href="/">
                <a
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  {t("sns")}
                </a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.title}>{t("media")}</p>
              <Link href="/">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose(e);
                    handleRouterActions("event");
                  }}
                >
                  {t("event_title")}
                </a>
              </Link>
              <Link href="/gallery">
                <a
                  className={styles.box_bottom}
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  {t("gallery")}
                </a>
              </Link>
              <p className={`${styles.title} ${styles.marginBottom_24}`}>
                {t("cabinet")}
              </p>
              <a
                href="/"
                onClick={(e) => {
                  handleClose(e);
                  handleLogin(e);
                }}
              >
                <p className={`${styles.donation} ${styles.title}`}>
                  {t("login")} <ArrowRight />
                </p>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
