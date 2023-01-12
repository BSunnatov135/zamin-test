import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./style.module.scss";
import RightArrow from "/src/assests/icons/rightArrow.svg";
import ArrowRight from "/src/assests/icons/narrowRight.svg";
import useTranslation from "next-translate/useTranslation";
import useProjects from "services/projects";

export default function MobileMenu({ open, handleClose, handleLogin }) {
  const [activeLink, setActiveLink] = useState(null);
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 3,
    },
  });
  console.log(projects?.data?.response);
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
          title: `${t("creation")}`,
          href: "/about",
        },
        {
          title: `${t("mission")}`,
          href: "/",
        },
        {
          title: `${t("activity")}`,
          href: "/",
        },
        {
          title: `${t("funding")}`,
          href: "/",
        },
        {
          title: `${t("trust")}`,
          href: "/",
        },
      ],
    },
    {
      title: `${t("advert_title")}`,
      key: "ads",
      children: [
        {
          title: `${t("advert_title")}`,
          href: "/news",
        },
      ],
    },
    {
      title: `${t("projects")}`,
      key: "projects",
      children: [
        {
          title: `${projects?.data?.response[0][`${lang}_name`]}`,
          href: `${`/info/${projects?.data?.response[0].guid}`}`,
        },
        {
          title: `${projects?.data?.response[1][`${lang}_name`]}`,
          href: `${`/info/${projects?.data?.response[1].guid}`}`,
        },
        {
          title: `${projects?.data?.response[2][`${lang}_name`]}`,
          href: `${`/info/${projects?.data?.response[2].guid}`}`,
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
          href: "/",
        },
        {
          title: `${t("gallery")}`,
          href: "/",
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
          {items.map((item, index) => (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(index + 1);
              }}
              key={item.key}
            >
              {item.title}
              <RightArrow />
            </a>
          ))}
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
          <ArrowRight /> Назад
        </a>
        {activeLink &&
          items[activeLink - 1].children.map((data) => (
            <Link href={data.href} key={data.title}>
              <a onClick={(e) => handleLinks(e, data.key)}>{data.title}</a>
            </Link>
          ))}
      </div>
    </div>
  );
}
