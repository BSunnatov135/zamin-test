import styles from "../../Header/Menu";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Spheres({ item }) {
  const { lang } = useTranslation();
  return (
    <div key={item.guid}>
      <Link href={`/info/${item.guid}`}>
        <a>{item[`${lang}_name`]}</a>
      </Link>
    </div>
  );
}
