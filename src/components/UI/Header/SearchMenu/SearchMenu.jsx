import styles from "./style.module.scss";
import { Container, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import XIcon from "/src/assests/icons/close.svg";
import classNames from "classnames";
import { useRouter } from "next/router";
import SearchIcon from "/src/assests/icons/searchIcon.svg";
import Link from "next/link";

export default function SearchMenu({ open, setOpenSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const { t } = useTranslation("common");
  const router = useRouter();
  const inputRef = useRef();

  //Function below: is written for changing router.query and some States
  const handleClick = (event) => {
    if (event.keyCode === 13 && searchValue) {
      router.push({ pathname: `/search`, query: { search: searchValue } });
      setSearchValue("");
      setOpenSearch(false);
    }
  };
  //useEffect below: responsible for autoFocus when the "SearchMenu" is opened
  useEffect(() => (open ? inputRef.current.focus() : null), [open]);

  return (
    <div
      className={
        !open ? classNames(styles.form, styles.closed) : classNames(styles.form)
      }
    >
      <div className={styles.inputWrapper}>
        <input
          onKeyDown={handleClick}
          type="text"
          id="id"
          placeholder={t("search_placeholder")}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.searchInput}
          value={searchValue}
          autoComplete="off"
          ref={inputRef}
        />
        <span className={searchValue ? styles.closeIcon : styles.notValued}>
          <XIcon onClick={() => setSearchValue("")} />
        </span>
        <Link
          href={
            searchValue
              ? {
                  pathname: `/search`,
                  query: { search: searchValue },
                }
              : { pathname: `/search` }
          }
        >
          <a className={styles.searchBtn}>
            <SearchIcon onClick={() => setSearchValue("")} />
          </a>
        </Link>
      </div>
    </div>
  );
}
