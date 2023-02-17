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
  const searchDebounce = useDebounce(inputValue, 500);
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
        />
        {inputValue?.length > 1 && (
          <XIcon
            className={styles.closeIcon}
            onClick={() => setInputValue("")}
          />
        )}
      </div>
      <SearchBody data={searchDebounce} />
    </Container>
  );
}
