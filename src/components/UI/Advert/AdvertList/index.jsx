import { Container } from "@mui/material";
import styles from "./style.module.scss";
import ProjectItem from "components/UI/Projects/ProjectItem";
import useAdverts from "services/advert";
import useTranslation from "next-translate/useTranslation";

export default function AdvertList() {
  const { t } = useTranslation("common");
  const { adverts } = useAdverts({
    advertParams: {
      offset: 0,
      limit: 100,
    },
  });
  console.log(adverts);
  return (
    <Container>
      <div className={styles.main}>
        <h2 className={styles.sectionTitle}>{t("advert_title")}</h2>
        <div className={styles.list}>
          {adverts?.data?.response?.map((item) => (
            <ProjectItem key={item.guid} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
