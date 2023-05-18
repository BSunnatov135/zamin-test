import { Popover } from "@mui/material";
import { useState } from "react";
import styles from "./style.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import ArrowDownIcon from "assests/icons/arrowDown.svg";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";

const langs = [
  {
    key: "oz",
    label: "O’zbekchа",
  },
  {
    key: "ru",
    label: "Русский",
  },
  {
    key: "en",
    label: "English",
  },
];

export default function LanguageDropdown() {
  const router = useRouter();
  const { t, lang } = useTranslation("common");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={styles.container}>
      <p onClick={handleClick}>
        <span>{lang === "ru" ? "Рус" : lang === "en" ? "Eng" : `O'zb`}</span>
        <ArrowDownIcon />
      </p>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{ horizontal: 130, vertical: -20 }}
      >
        <ul className={styles.popover}>
          {langs.map((item) => (
            <li key={item.key} className={styles.item} onClick={handleClose}>
              <Link href={router.asPath} locale={item.key}>
                <a>
                  <span>{item.label}</span>
                  {item.key === lang ? <CheckIcon fontSize="small" /> : ""}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Popover>
    </div>
  );
}
