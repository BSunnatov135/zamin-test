import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./style.module.scss";
import RightArrow from "/src/assests/icons/rightArrow.svg";
import ArrowRight from "/src/assests/icons/narrowRight.svg";

const items = [
  {
    title: "О фонде",
    key: "fond",
    children: [
      {
        title: "О создании",
        href: "/",
      },
      {
        title: "Наша миссия",
        href: "/",
      },
      {
        title: "Ключевые сферы деятельности",
        href: "/",
      },
      {
        title: "Источники финансирование",
        href: "/",
      },
      {
        title: "Попечительский совет",
        href: "/",
      },
    ],
  },
  {
    title: "Объявления",
    key: "ads",
    children: [
      {
        title: "Объявления",
        href: "/",
      },
    ],
  },
  {
    title: "Наши Проекты",
    key: "projects",
    children: [
      {
        title: "Окружающая среда",
        href: "/",
      },
      {
        title: "Инновационные технологии в социальной сфере",
        href: "/",
      },
      {
        title: "Программа развития образования детей с нарушением слуха",
        href: "/",
      },
    ],
  },
  {
    title: "Контакты",
    key: "contact",
    children: [
      {
        title: "Email: info@zaminfoundation.uz",
        href: "mailto:info@zaminfoundation.uz",
      },
      {
        title: "Социальные сети",
        href: "/",
      },
    ],
  },
  {
    title: "Медиа",
    key: "media",
    children: [
      {
        title: "Мероприятия",
        href: "/",
      },
      {
        title: "Галерея",
        href: "/",
      },
    ],
  },
  {
    title: "Личный кабинет",
    key: "cabinet",
    children: [
      {
        title: "Войти",
        href: "/",
        key: "login",
      },
    ],
  },
];

export default function MobileMenu({ open, handleClose, handleLogin }) {
  const [activeLink, setActiveLink] = useState(null);
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
    if (key === "login") {
      handleLogin(e, key);
      handleClose();
    }
  };

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
            <Link href="/" key={data.title}>
              <a onClick={(e) => handleLinks(e, data.key)}>{data.title}</a>
            </Link>
          ))}
      </div>
    </div>
  );
}
