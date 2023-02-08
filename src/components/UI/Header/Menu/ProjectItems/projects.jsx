import styles from "./style.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import useSpheres from "services/spheres";

export default function Projects({ item, handleClose = () => {}, id }) {
  const { lang } = useTranslation();

  return (
    <div key={item?.guid}>
      <Link href={`/projects/${id}`}>
        <a
          className={styles.projectItem}
          onClick={(e) => {
            handleClose(e);
          }}
          dangerouslySetInnerHTML={{
            __html: item?.[`${lang}_name`],
          }}
        />
      </Link>
    </div>
  );
}
