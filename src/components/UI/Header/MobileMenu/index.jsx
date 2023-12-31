import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./style.module.scss";
import RightArrow from "/src/assests/icons/rightArrow.svg";
import ArrowRight from "/src/assests/icons/narrowRight.svg";
import useTranslation from "next-translate/useTranslation";
import useProjects from "services/projects";
import InstaLight from "assests/icons/InstagramHeader.svg";
import TelegramLight from "assests/icons/TelegramHeader.svg";
import FacebookLight from "assests/icons/FaceBookHeader.svg";
import YoutubeIcon from "assests/icons/youtube.svg";
import { useRouter } from "next/router";
import useSpheres from "services/spheres";
import useAdverts from "services/advert";

export default function MobileMenu({
  open,
  handleClose = () => {},
  handleLogin,
  size,
  menuRef,
}) {
  const [activeLink, setActiveLink] = useState(null);
  const { t, lang } = useTranslation("common");

  const router = useRouter();
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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);

  const handleLinks = (e, key) => {
    handleClose();
    if (key === "login") {
      handleLogin(e, key);
      handleClose();
    }
  };

  const items = [
    {
      title: `${t("about_fond")}`,
      key: "fond",
      children: [
        {
          title: `${t("about")}`,
          href: "/about",
        },
        // {
        //   title: `${t("activity")}`,
        //   href: "/about#sphere",
        // },

        {
          title: `${t("trust")}`,
          href: "/about#board",
        },
      ],
    },
    {
      title: `${t("projects")}`,
      key: "projects",
      children: [
        {
          title: `${spheres?.data?.response[0][`${lang}_name`]}`,
          href: `/projects/${spheres?.data?.response[0].guid}`,
        },
        {
          title: `${spheres?.data?.response[1][`${lang}_name`]}`,
          href: `/projects/${spheres?.data?.response[1].guid}`,
        },
        {
          title: `${spheres?.data?.response[2][`${lang}_name`]}`,
          href: `/projects/${spheres?.data?.response[2].guid}`,
        },
      ],
    },
    {
      title: `${t("contacts")}`,
      key: "contact",
      children: [
        {
          title: "Email: info@zaminfoundation.uz",
          href: "mailto:info@zaminfoundation.uz",
        },
        {
          title: `${t("sns")}`,
          href: "/",
        },
      ],
    },
    {
      title: `${t("media")}`,
      key: "media",
      children: [
        {
          title: `${t("event_title")}`,
          href: "/event",
        },
        {
          title: `${t("advert_title")}`,
          href: "/#news",
        },
      ],
    },
    // {
    //   title: `${t("cabinet")}`,
    //   key: "cabinet",
    //   children: [
    //     {
    //       title: `${t("login")}`,
    //       href: "/",
    //       key: "login",
    //     },
    //   ],
    // },
  ];

  const renderLabel = (data) => {
    switch (data.title) {
      case t("sns"): {
        return (
          <div>
            <a
              onClick={(e) => {
                handleLinks(e, data.key);
              }}
            />
            <div className={styles.snsButtons}>
              <a
                href="https://www.instagram.com/zaminfoundation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstaLight />
              </a>
              <a
                href="https://www.facebook.com/zaminfoundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookLight />
              </a>
              <a
                href="https://t.me/zaminfoundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramLight />
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
        );
      }
      case t("advert_title"): {
        return (
          isActive?.data === "true" && (
            <Link href={data.href}>
              <a
                dangerouslySetInnerHTML={{
                  __html: data.title,
                }}
                onClick={(e) => {
                  handleLinks(e, data.key);
                  setActiveLink(null);
                }}
              ></a>
            </Link>
          )
        );
      }
      default: {
        return (
          <Link href={data.href}>
            <a
              dangerouslySetInnerHTML={{
                __html: data.title,
              }}
              onClick={(e) => {
                handleLinks(e, data.key);
                setActiveLink(null);
              }}
            ></a>
          </Link>
        );
      }
    }
  };

  return (
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
      {!activeLink && (
        <div className={styles.box}>
          <a
            onClick={(e) => {
              setActiveLink(1);
            }}
            key={items[0].key}
          >
            {items[0].title}
            <RightArrow />
          </a>
          <a
            onClick={(e) => {
              setActiveLink(2);
            }}
            key={items[1].key}
          >
            {items[1].title}
            <RightArrow />
          </a>
          <a
            onClick={(e) => {
              setActiveLink(3);
            }}
            key={items[2].key}
          >
            {items[2].title}
            <RightArrow />
          </a>
          <a
            onClick={(e) => {
              setActiveLink(4);
            }}
            key={items[3].key}
          >
            {items[3].title}
            <RightArrow />
          </a>
          <a href="/donate">
            <p className={styles.donation}>
              {t("donate")} <ArrowRight />
            </p>
          </a>
          {/* <a
            onClick={(e) => {
              setActiveLink(5);
            }}
            key={items[4].key}
          >
            {items[4].title}
            <RightArrow />
          </a> */}
          {/* <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveLink(6);
            }}
            key={items[5].key}
          >
            {items[5].title}
            <RightArrow />
          </a> */}
          {/* <div>
            <p className={styles.language}>{t("language")}</p>
            <ul className={styles.languageWrapper}>
              {langs.map((item) => (
                <li
                  key={item.key}
                  className={classNames(styles.item, {
                    [styles.chosen]: item.key === lang,
                  })}
                >
                  <Link href={router.asPath} locale={item.key}>
                    <a>
                      <span>{item.label}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      )}

      <div
        className={classNames(styles.links, styles.box, {
          [styles.active]: activeLink,
        })}
      >
        <a
          onClick={() => {
            setActiveLink(null);
          }}
        >
          <ArrowRight /> {t("back")}
        </a>
        {activeLink &&
          items[activeLink - 1].children.map((data) => (
            <div
              key={data.title}
              scroll={false}
              className={
                data.title === t("advert_title") &&
                isActive.data === "false" &&
                styles.noBorder
              }
            >
              <>{renderLabel(data)}</>
            </div>
          ))}
      </div>
    </div>
  );
}
