import styles from "../style.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import IconGeneretor from "components/IconGeneretor";
import { useState } from "react";

export default function SphereItem({ item, className }) {
  const { lang } = useTranslation();

  return (
    <p className={className}>
      <IconGeneretor icon={item?.sphere_icon} />
      {item[`${lang}_name`]}
    </p>
  );
}
