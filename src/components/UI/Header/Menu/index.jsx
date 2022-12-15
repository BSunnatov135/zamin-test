import { Container } from "@mui/material";
import classNames from "classnames";
import LoginForm from "components/UI/Auth/Login";
import Link from "next/link";
import { useState } from "react";
import styles from "./style.module.scss";
import ArrowRight from "/src/assests/icons/narrowRight.svg";

export default function Menu({ open, menuRef, handleClose, handleLogin }) {
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
              <p className={styles.title}>О фонде</p>
              <Link href="/">
                <a>О создании</a>
              </Link>
              <Link href="/">
                <a>Наша миссия</a>
              </Link>
              <Link href="/">
                <a>
                  Ключевые сферы <br /> деятельности
                </a>
              </Link>
              <Link href="/">
                <a>Источники финансирование</a>
              </Link>
              <Link href="/">
                <a className={styles.box_bottom}>Попечительский совет</a>
              </Link>
              <p className={styles.title}>Объявления</p>
              <Link href="/">
                <a>Объявления</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.title}>Наши Проекты</p>
              <Link href="/">
                <a>Окружающая среда</a>
              </Link>
              <Link href="/">
                <a>Инновационные технологии в социальной сфере</a>
              </Link>
              <Link href="/">
                <a className={styles.marginBottom_24}>
                  Программа развития образования детей с нарушением слуха
                </a>
              </Link>
              <Link href="/">
                <a>
                  <p className={`${styles.donation} ${styles.title}`}>
                    Сделайте пожертвование <ArrowRight />
                  </p>
                </a>
              </Link>
              <p className={styles.title}>Контакты</p>
              <Link href="/">
                <a>Email: info@zaminfoundation.uz</a>
              </Link>
              <Link href="/">
                <a>Социальные сети</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.title}>Медиа</p>
              <Link href="/">
                <a>Мероприятия</a>
              </Link>
              <Link href="/">
                <a className={styles.box_bottom}>Галерея</a>
              </Link>
              <p className={`${styles.title} ${styles.marginBottom_24}`}>
                Личный кабинет
              </p>
              <a href="/" onClick={handleLogin}>
                <p className={`${styles.donation} ${styles.title}`}>
                  Войти <ArrowRight />
                </p>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
