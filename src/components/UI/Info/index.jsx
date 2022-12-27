import Banner from "./Banner";
import Content from "./Context";
import Projects from "components/UI/Projects";
import { useRouter } from "next/router";
import useProjects from "services/projects";
import useAdverts from "services/advert";
import useEvents from "services/events";
import { useEffect, useMemo, useState } from "react";
import Slider from "../Slider/Index";
import useTranslation from "next-translate/useTranslation";

export default function Info() {
  const { lang } = useTranslation();
  const router = useRouter();
  const queryFrom = router?.query?.from;
  const { project, projectSlider } = useProjects({
    projectId: router.query.info,
    sliderProps: {
      shouldGet: false,
      limit: 50,
      offset: 0,
      website_projects_id: router.query.info,
    },
  });

  const { event } = useEvents({
    eventId: router.query.info,
  });
  const { advert } = useAdverts({
    advertId: router.query.info,
  });

  const sliderData = useMemo(() => {
    let data;
    if (queryFrom === "news") {
    } else if (queryFrom === "events") {
    } else {
      data = projectSlider?.data?.response;
    }
    return data;
  }, [projectSlider]);

  const data = useMemo(() => {
    let newData;
    if (queryFrom === "news") {
      newData = advert?.data?.response;
    } else if (queryFrom === "events") {
      newData = event?.data?.response;
    } else newData = project?.data?.response;
    return newData;
  }, [advert, project, event]);

  return (
    <>
      {/* {project && !queryFrom && <Banner item={data ? data : {}} />} */}
      <Slider
        data={sliderData ?? []}
        title={
          data?.[`${lang}_name`]
            ? data?.[`${lang}_name`]
            : data?.[`${lang}_header`]
        }
      />
      <Content item={data ? data : {}} router={router} />
      {!queryFrom && <Projects />}
    </>
  );
}
