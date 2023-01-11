import Banner from "./Banner";
import Content from "./Context";
import Projects from "components/UI/Projects";
import { useRouter } from "next/router";
import useProjects from "services/projects";
import useAdverts from "services/advert";
import useEvents from "services/events";
import { useMemo, useState } from "react";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import Slider from "components/UI/Slider/Slider";

export default function Info() {
  const { lang } = useTranslation();
  const router = useRouter();
  const queryFrom = router?.query?.from;
  const projectId = useMemo(() => {
    let id;
    if (!queryFrom) id = router.query.info;
    return id;
  }, [router.query]);
  const advertId = useMemo(() => {
    let id;
    if (queryFrom === "news") id = router.query.info;
    return id;
  }, [router.query]);
  const eventId = useMemo(() => {
    let id;
    if (queryFrom === "events") id = router.query.info;
    return id;
  }, [router.query]);

  const { project, projectSlider } = useProjects({
    projectId: projectId,
    sliderProps: {
      shouldGet: false,
      limit: 50,
      offset: 0,
      website_projects_id: projectId,
    },
  });

  const { advert, advertSlider } = useAdverts({
    advertId: advertId,
    sliderProps: {
      shouldGet: false,
      limit: 50,
      offset: 0,
      news_id: advertId,
    },
  });

  const { event, eventSlider } = useEvents({
    eventId: eventId,
    sliderProps: {
      shouldGet: false,
      limit: 50,
      offset: 0,
      website_events_id: eventId,
    },
  });

  const data = useMemo(() => {
    let newData;
    if (queryFrom === "news") {
      newData = advert?.data?.response;
    } else if (queryFrom === "events") {
      newData = event?.data?.response;
    } else newData = project?.data?.response;
    return newData;
  }, [advert, project, event]);

  const sliderData = useMemo(() => {
    let currentData;
    if (queryFrom === "news") {
      currentData = advertSlider?.data?.response
        ? [{ file_link: data?.photo }, ...advertSlider?.data?.response]
        : [{ file_link: data?.photo }];
    } else if (queryFrom === "events") {
      currentData = eventSlider?.data?.response
        ? [
            { file_link: data?.poster !== null && data?.poster },
            ...eventSlider?.data?.response,
          ]
        : [{ file_link: data?.poster }];
    } else {
      currentData = projectSlider?.data?.response
        ? [
            { file_link: data?.photo !== null && data?.photo },
            ...projectSlider?.data?.response,
          ]
        : [{ file_link: data?.photo }];
    }
    return currentData;
  }, [projectSlider, eventSlider, advertSlider]);

  return (
    <>
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
