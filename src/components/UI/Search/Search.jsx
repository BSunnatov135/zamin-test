import styles from "./style.module.scss";
import { Container, Typography } from "@mui/material";
import useDebounce from "hooks/useDebounce";
import { useState, useEffect } from "react";
import SearchBody from "./SearchBody/SearchBody";
import useTranslation from "next-translate/useTranslation";
import XIcon from "/src/assests/icons/close.svg";
import { useRouter } from "next/router";

export default function Search() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { search } = router.query;
  const [inputValue, setInputValue] = useState(search);

  //useDebounce below: is a custom hook for request and getting value by sending arg1="inputValue" if it's not changed arg2="500ms"
  const searchDebounce = useDebounce(inputValue, 500);

  //useEffect below: is responsible for changing router when from "/search" page changed input value
  useEffect(() => {
    search !== inputValue && search ? router.push("/search") : null;
  }, [inputValue, search]);

  return (
    <Container className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          id="id"
          placeholder={t("search_placeholder")}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.searchInput}
          value={inputValue}
          autoComplete="off"
          autoFocus
        />
        {inputValue?.length >= 1 && (
          <span className={styles.closeIcon}>
            <XIcon onClick={() => setInputValue("")} />
          </span>
        )}
      </div>
      <SearchBody data={searchDebounce} />
    </Container>
  );
}
