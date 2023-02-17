import styles from "./style.module.scss";
import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import XIcon from "/src/assests/icons/close.svg";
import classNames from "classnames";
import { useRouter } from "next/router";
import SearchIcon from "/src/assests/icons/searchIcon.svg";
import Link from "next/link";

export default function SearchMenu({ open }) {
  const [searchValue, setSearchValue] = useState();
  const { t } = useTranslation("common");
  const router = useRouter();

  const handleClick = (event) => {
    if (event.keyCode === 13 && searchValue) {
      router.push({ pathname: `/search`, query: { search: searchValue } });
    }
  };

  return (
    <div
      className={
        !open ? classNames(styles.form, styles.closed) : classNames(styles.form)
      }
    >
      <div className={styles.inputWrapper}>
        <input
          autoComplete="false"
          onKeyDown={handleClick}
          type="text"
          id="id"
          placeholder={t("search_placeholder")}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.searchInput}
          value={searchValue}
        />
        {searchValue?.length > 1 && (
          <XIcon
            className={styles.closeIcon}
            onClick={() => setSearchValue("")}
          />
        )}
      </div>
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
          <SearchIcon />
        </a>
      </Link>
    </div>
  );
}
