import { Container } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.scss";
import MenuIcon from "assests/icons/menu.svg";
import AccessIcon from "assests/icons/access.svg";
import CloseIcon from "assests/icons/close.svg";
import LanguageDropdown from "./LanguageDropdown";
import Menu from "./Menu";
import { useState } from "react";
import { useRef } from "react";
import useOnClickOutside from "hooks/useOnClickOutside";
import classNames from "classnames";
import MobileMenu from "./MobileMenu";
import LoginForm from "../Auth/Login";
import useTranslation from "next-translate/useTranslation";
import Logo from "/public/logos/logo.svg";
import RestLogo from "/public/logos/resLogo.svg";
import Profile from "./Profile/Profile";
import { LogOutIcon } from "/public/icons/icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const { t } = useTranslation("common");
  const handleLogin = (event) => {
    event && event.preventDefault();
    setOpenLogin((prev) => !prev);
  };
  const [mobileMenu, setMobileMenu] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <>
      <header className={classNames(styles.header, { [styles.active]: open })}>
        <Container>
          <div className={styles.box}>
            <div
              className={styles.menu}
              onClick={() => {
                if (window.innerWidth < 700) {
                  setMobileMenu((prev) => !prev);
                } else {
                  setOpen((prev) => !prev);
                }
              }}
            >
              {open || mobileMenu ? <CloseIcon /> : <MenuIcon />}
            </div>
            <Link href="/">
              <a className={styles.logo} href="/">
                <Logo />
              </a>
            </Link>
            <Link href="/">
              <a className={styles.resLogo} href="/">
                <RestLogo />
              </a>
            </Link>
            <div className={styles.rightElement}>
              <p id="openAccessibility" tabindex="0">
                <p className={styles.accessibilityTitle}>
                  {t("accessibility")}
                </p>
                <AccessIcon />
              </p>
              <LanguageDropdown />
              {/* <div className={styles.profileSets}>
                <Profile />
                <LogOutIcon />
              </div> */}
            </div>
          </div>
        </Container>
      </header>
      <div className={styles.rectangle} />
      <Menu
        menuRef={ref}
        open={open}
        handleClose={() => setOpen((prev) => !prev)}
        handleLogin={handleLogin}
      />
      <MobileMenu
        open={mobileMenu}
        handleClose={() => setMobileMenu((prev) => !prev)}
        handleLogin={handleLogin}
      />
      <LoginForm open={openLogin} handleClose={handleLogin} />
    </>
  );
}
