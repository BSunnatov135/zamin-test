import { Container } from "@mui/material";
import classNames from "classnames";
import LoginForm from "components/UI/Auth/Login";
import Link from "next/link";
import styles from "./style.module.scss";
import ArrowRight from "/src/assests/icons/narrowRight.svg";
import useTranslation from "next-translate/useTranslation";
import Spheres from "./ProjectItems/projects";
import useProjects from "services/projects";

export default function Menu({ open, menuRef, handleClose, handleLogin }) {
  const { projects } = useProjects({
    projectParams: {
      offset: 0,
      limit: 3,
    },
  });
  const { t } = useTranslation("common");

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
              <Link href="/">
                <a>{t("creation")}</a>
              </Link>
              <Link href="/">
                <a>{t("mission")}</a>
              </Link>
              <Link href="/">
                <a>{t("activity")}</a>
              </Link>
              <Link href="/">
                <a>{t("funding")}</a>
              </Link>
              <Link href="/">
                <a className={styles.box_bottom}>{t("trust")}</a>
              </Link>
              <p className={styles.title}>{t("advert_title")}</p>
              <Link href="/">
                <a>{t("advert_title")}</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.title}>{t("projects")}</p>
              {projects?.data?.response?.map((item) => (
                <Spheres key={item.guid} item={item} />
              ))}
              <Link href="/">
                <a>
                  <p className={`${styles.donation} ${styles.title}`}>
                    {t("donate")} <ArrowRight />
                  </p>
                </a>
              </Link>
              <p className={styles.title}>{t("contacts")}</p>
              <Link href="/">
                <a>Email: info@zaminfoundation.uz</a>
              </Link>
              <Link href="/">
                <a>{t("sns")}</a>
              </Link>
            </div>
            <div className={styles.box}>
              <p className={styles.title}>{t("media")}</p>
              <Link href="/">
                <a>{t("event_title")}</a>
              </Link>
              <Link href="/">
                <a className={styles.box_bottom}>{t("gallery")}</a>
              </Link>
              <p className={`${styles.title} ${styles.marginBottom_24}`}>
                {t("cabinet")}
              </p>
              <a href="/" onClick={handleLogin}>
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
