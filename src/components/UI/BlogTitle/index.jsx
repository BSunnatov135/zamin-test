import Link from "next/link";
import styles from "./style.module.scss";
import ArrowRightIcon from "assests/icons/arrowRight.svg";

export default function BlogTitle({ title, link }) {
  return (
    <div className={styles.header}>
      <div className={styles.leftElement}>
        <p
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </div>
      {link && (
        <Link href={link.path || "/"}>
          <a>
            {link.title}
            <ArrowRightIcon />
          </a>
        </Link>
      )}
    </div>
  );
}
