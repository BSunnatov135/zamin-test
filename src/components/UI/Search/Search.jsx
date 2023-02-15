import styles from "./style.module.scss";
import { Container, Typography } from "@mui/material";
import useDebounce from "hooks/useDebounce";
import { useState } from "react";
import SearchBody from "./SearchBody/SearchBody";

export default function Search() {
  const [inputValue, setInputValue] = useState();
  const searchDebounce = useDebounce(inputValue, 500);
  return (
    <Container className={styles.form}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.searchInput}
      />
      <SearchBody data={searchDebounce} />
    </Container>
  );
}
