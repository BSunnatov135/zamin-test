import cls from "./Projects.module.scss";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import useSpheres from "services/spheres";
import UzbMap from "../UzbMap";
import SphereItem from "./SphereItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/router";

function Projects() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const [dataSphere, setDataSphere] = useState();
  const [activeSphere, setActiveSphere] = useState();
  const [activeProjects, setActiveProjects] = useState([]);
  const router = useRouter();
  const { spheres, sphere } = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 5,
    },
    dataSphere: {
      limit: 99,
      offset: 0,
      spheres_id: dataSphere,
    },
  });
  const spheresRes = spheres?.data?.response;
  const sphereRes = sphere?.data?.response;

  // console.log("spheresRes", spheresRes);
  // console.log("sphereRes", sphereRes);

  useEffect(() => {
    if (spheresRes) {
      setDataSphere(spheresRes[0]?.guid);
    }
  }, [spheres]);

  useEffect(() => {
    if (sphereRes) {
      setActiveSphere(sphereRes[0]?.guid);
    }
  }, [sphere]);

  const hanldeClick = (e) => {
    setDataSphere(e.guid);
  };

  const handleSphere = (el) => {
    setActiveSphere(el.guid);
    setActiveProjects(el?.achievements_map_ids_data);
  };

  return (
    <div className={cls.root}>
      <div className={cls.projects}>
        <h1>{t("projects")}</h1>
        <div className={cls.tabs}>
          {spheresRes && spheresRes.length > 0
            ? spheresRes.map((el, index) => (
                <div key={el.guid} onClick={() => hanldeClick(el)}>
                  <SphereItem
                    item={el}
                    className={
                      dataSphere === el.guid
                        ? `${cls.activeTab} ${cls.tab}`
                        : cls.tab
                    }
                  />
                </div>
              ))
            : null}
        </div>
        <div className={cls.body}>
          {sphereRes && sphereRes.length > 0
            ? sphereRes.map((el) => (
                <div
                  onClick={() => {
                    handleSphere(el);
                  }}
                  key={el.guid}
                  className={
                    activeSphere === el.guid
                      ? `${cls.activeSphere}`
                      : cls.sphere
                  }
                >
                  <div
                    className={cls.name}
                    dangerouslySetInnerHTML={{
                      __html: el?.[`${lang}_name`],
                    }}
                  />
                  <div className={cls.sphereBtn}>
                    <p
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/project-info/${el.guid}`);
                      }}
                    >
                      Подробнее
                    </p>
                    <span>
                      <KeyboardArrowRightIcon />
                    </span>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>

      <UzbMap data={activeProjects} />
    </div>
  );
}

export default Projects;
