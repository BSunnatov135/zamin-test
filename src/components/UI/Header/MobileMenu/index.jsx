import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./style.module.scss";
import RightArrow from "/src/assests/icons/rightArrow.svg";
import ArrowRight from "/src/assests/icons/narrowRight.svg";
import useTranslation from "next-translate/useTranslation";
import useProjects from "services/projects";
import { useRouter } from "next/router";

export default function MobileMenu({ open, handleClose, handleLogin }) {
  const [activeLink, setActiveLink] = useState(null);
  const { t, lang } = useTranslation("common");

  const router = useRouter();
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 3,
    },
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
  const langs = [
    {
      key: "ru",
      label: "Ру",
    },
    {
      key: "uz",
      label: "O’zb",
    },

    {
      key: "en",
      label: "En",
    },
  ];
  const items = [
    {
      title: `${t("about_fond")}`,
      key: "fond",
      children: [
        {
          title: `${t("creation")}`,
          href: "/about",
        },
        {
          title: `${t("activity")}`,
          href: "/about#sphere",
        },

        {
          title: `${t("trust")}`,
          href: "/about#board",
        },
      ],
    },
    {
      title: `${t("advert_title")}`,
      key: "ads",
    },
    {
      title: `${t("projects")}`,
      key: "projects",
      children: [
        {
          title: `${projects?.data?.response[0][`${lang}_name`]}`,
          href: `${`/project-info/${projects?.data?.response[0].guid}`}`,
        },
        {
          title: `${projects?.data?.response[1][`${lang}_name`]}`,
          href: `${`/project-info/${projects?.data?.response[1].guid}`}`,
        },
        {
          title: `${projects?.data?.response[2][`${lang}_name`]}`,
          href: `${`/project-info/${projects?.data?.response[2].guid}`}`,
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
          title: `${t("gallery")}`,
          href: "/gallery",
        },
      ],
    },
    {
      title: `${t("cabinet")}`,
      key: "cabinet",
      children: [
        {
          title: `${t("login")}`,
          href: "/",
          key: "login",
        },
      ],
    },
  ];

  return (
    <div
      className={classNames(styles.menu, {
        [styles.open]: open,
      })}
    >
      {!activeLink && (
        <div className={styles.box}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveLink(1);
            }}
            key={items[0].key}
          >
            {items[0].title}
            <RightArrow />
          </a>
          <a href="/news">{items[1].title}</a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveLink(3);
            }}
            key={items[2].key}
          >
            {items[2].title}
            <RightArrow />
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveLink(4);
            }}
            key={items[3].key}
          >
            {items[3].title}
            <RightArrow />
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveLink(5);
            }}
            key={items[4].key}
          >
            {items[4].title}
            <RightArrow />
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveLink(6);
            }}
            key={items[5].key}
          >
            {items[5].title}
            <RightArrow />
          </a>
          <div>
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
          </div>
        </div>
      )}

      <div
        className={classNames(styles.links, styles.box, {
          [styles.active]: activeLink,
        })}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveLink(null);
          }}
        >
          <ArrowRight /> {t("back")}
        </a>
        {activeLink &&
          items[activeLink - 1].children.map((data) => (
            <Link
              href={data.href}
              key={data.title}
              scroll={false}
              passHref
              legacyBehavior
            >
              <a
                onClick={(e) => handleLinks(e, data.key)}
                dangerouslySetInnerHTML={{
                  __html: data.title,
                }}
              ></a>
            </Link>
          ))}
      </div>
    </div>
  );
}
