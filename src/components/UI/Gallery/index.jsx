import styles from "./styles.module.scss";
import useGallery from "services/gallery";

export default function Gallery() {
  const { images } = useGallery({
    galleryParams: {
      offset: 0,
      limit: 10,
    },
  });
  console.log("gallery==>", images);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Галерея</h2>
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
