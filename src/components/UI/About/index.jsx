import styles from "./styles.module.scss";
import Image from "next/image";
import { useMemo } from "react";
import { useEffect } from "react";

export default function About() {
  const images = [
    {
      image: "/images/gallery1.jpeg",
    },
    {
      image: "/images/Gallery2.jpeg",
    },
    {
      image: "/images/Gallery3.jpeg",
    },
    {
      image: "/images/Gallery3.jpeg",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Галерея</h2>
      <div className={styles.flexContainer}>
        {images.map((item) => (
          <div className={styles.item}>
            <img src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
