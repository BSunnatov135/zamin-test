import { Container, Typography } from "@mui/material";
import classNames from "classnames";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import ArrowRight from "/src/assests/icons/narrowRight.svg";
import useTranslation from "next-translate/useTranslation";
import Projects from "./ProjectItems/projects";
import useSpheres from "services/spheres";
import scrollToRef from "mixins/scrollToRef";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setScrollSectionName } from "store/scrollFunctionSlice/scrollFunctionSlice";
import { useState } from "react";
import useAdverts from "services/advert";
import TelegramHeader from "assests/icons/TelegramHeader.svg";
import InstagramHeader from "assests/icons/InstagramHeader.svg";
import FaceBookHeader from "assests/icons/FaceBookHeader.svg";

export default function Menu({
  open,
  menuRef,
  handleClose = () => {},
  handleLogin,
  size,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const path = router.asPath;
  const advertsRef = useSelector((state) => state.scrollRef.advertsRef);
  const eventsRef = useSelector((state) => state.scrollRef.eventsRef);
  const { spheres, sphere } = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 3,
    },
  });
  const { isActive } = useAdverts({
    advertIsActive: {},
  });

  useEffect(() => {
    const handleRouteChange = () => {
      // board && board.scrollIntoView({
      //   behavior: "smooth",
      //   block: "end",
      //   inline: "nearest",
      // });
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  function handleRouterActions(status) {
    // if (status === "event") {
    //   path === "/" ? scrollTo(eventsRef) : router.push("/event");
    // }

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
        className={
          size
            ? classNames(
                styles.menu,
                {
                  [styles.open]: open,
                },
                styles.headerLight
              )
            : classNames(styles.menu, {
                [styles.open]: open,
              })
        }
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
                  {t("about")}
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
              {/* <Link
                href="/about#sphere"
                passHref
                legacyBehavior
                scroll={false}
                replace
              >
                <a
                  onClick={(e) => {
                    handleClose(e);
                  }}
                  href="/about#sphere"
                >
                  {t("activity")}
                </a>
              </Link> */}
              {/* <Link href="/">
                <a
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  {t("funding")}
                </a>
              </Link> */}
              <Link
                href="/about#board"
                passHref
                scroll={false}
                legacyBehavior
                path
              >
                <a
                  className={styles.box_bottom}
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  {t("trust")}
                </a>
              </Link>
              <p className={styles.title}>{t("projects")}</p>
              {spheres?.data?.response?.map((item) => (
                <Projects
                  key={item?.guid}
                  item={item}
                  id={item.guid}
                  onClick={(e) => {
                    handleClose(e);
                  }}
                />
              ))}
            </div>
            <div className={styles.box}>
              {/* <p className={styles.title}>{t("projects")}</p> */}
              {/* {projects?.data?.response?.map((item) => (
                <Projects key={item.guid} item={item} />
              ))} */}
              {/* <Link href="/">
                <a
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  <p className={`${styles.donation} ${styles.title}`}>
                    {t("donate")} <ArrowRight />
                  </p>
                </a>
              </Link> */}
              <p className={styles.title}>{t("media")}</p>
              <Link href="/event" passHref>
                <a
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  {t("event_title")}
                </a>
              </Link>
              {isActive?.data == "true" && (
                <Link href="/#news" passHref legacyBehavior path>
                  <a
                    onClick={(e) => {
                      handleClose(e);
                    }}
                  >
                    {t("advert_title")}
                  </a>
                </Link>
              )}
              {/* <Link href="/gallery">
                <a
                  className={styles.box_bottom}
                  onClick={(e) => {
                    handleClose(e);
                  }}
                >
                  {t("gallery")}
                </a>
              </Link> */}
              {/* ( */}
              {/* <>
                <p className={classNames(styles.title, styles.topMargin)}>
                  {t("advert_title")}
                </p>
              </>
              )} */}
            </div>
            <div className={styles.box}>
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
              <div className={styles.SocialIcons}>
                <a
                  href="https://www.instagram.com/zaminfoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramHeader />
                </a>
                <a
                  href="https://www.facebook.com/zaminfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaceBookHeader />
                </a>
                <a
                  href="https://t.me/zaminfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TelegramHeader />
                </a>
              </div>
              {/* <p className={`${styles.title} ${styles.marginBottom_24}`}>
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
              </a> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
