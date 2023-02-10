import cls from "./Projects.module.scss";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import useSpheres from "services/spheres";
import UzbMap from "../UzbMap";

function Projects() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const [dataSphere, setDataSphere] = useState();
  const [uuid, setUuid] = useState();
  const { spheres, sphere } = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 5,
    },
    dataSphere: {
      limit: 5,
      offset: 0,
      spheres_id: dataSphere,
    },
  });

  useEffect(() => {
    if (spheres?.data?.response) {
      setDataSphere(spheres?.data?.response[0]?.guid);
    }
  }, [spheres, uuid]);

  const hanldeClick = (e) => {
    setUuid(e.guid);
  };

  console.log("spheres", spheres);

  console.log("sphere", sphere);

  console.log("dataSphere", dataSphere);
  return (
    <div className={cls.root}>
      <div className={cls.projects}>
        <h1>{t("projects")}</h1>
        <div className={cls.tabs}></div>
      </div>

      <UzbMap />
    </div>
  );
}

export default Projects;
