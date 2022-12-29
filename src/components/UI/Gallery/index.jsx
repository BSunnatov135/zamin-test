import styles from "./styles.module.scss";
import Image from "next/image";
import { useMemo } from "react";
import { useEffect } from "react";
import useGallery from "services/gallery";

export default function Gallery() {
  const { images } = useGallery({
    galleryParams: {
      offset: 0,
      limit: 10,
    },
  });
  console.log("gallery==>", images?.data);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Галерея</h2>
      <div className={styles.flexContainer}>
        <div className={styles.item}>{/* <img src={item.image} /> */}</div>
      </div>
    </div>
  );
}
