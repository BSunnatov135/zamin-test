import styles from "./style.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import useSpheres from "services/spheres";

export default function Projects({ item, handleClose, id }) {
  console.log("id", id);
  const { lang } = useTranslation();
  // console.log("item==>", item.guid);
  return (
    <div key={item?.guid}>
      <Link href={`/projects/${id}`}>
        <a
          className={styles.projectItem}
          onClick={(e) => {
            handleClose(e);
          }}
        >
          {item[`${lang}_name`]}
        </a>
      </Link>
    </div>
  );
}
