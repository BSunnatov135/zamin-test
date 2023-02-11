import styles from "./styles.module.scss";
import useGallery from "services/gallery";
import useTranslation from "next-translate/useTranslation";

export default function Gallery() {
  const { t } = useTranslation("common");
  const { images } = useGallery({
    galleryParams: {
      offset: 0,
      limit: 10,
    },
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("gallery")}</h2>
      <div className={styles.flexContainer}>
        {images?.data?.response.map((item) => (
          <div className={styles.item}>
            <img
              src={
                item.gallery_file
                  ? item.gallery_file
                  : item.file_id_data?.file_link
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
