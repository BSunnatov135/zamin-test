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

export default function Info({ title, sliderData, data }) {
  const router = useRouter();
  const queryFrom = router?.query?.from;

  // const projectId = useMemo(() => {
  //   let id;
  //   if (!queryFrom) id = router.query.info;
  //   return id;
  // }, [router.query]);
  // const advertId = useMemo(() => {
  //   let id;
  //   if (queryFrom === "news") id = router.query.info;
  //   return id;
  // }, [router.query]);
  // const eventId = useMemo(() => {
  //   let id;
  //   if (queryFrom === "events") id = router.query.info;
  //   return id;
  // }, [router.query]);

  // const { advert, advertSlider } = useAdverts({
  //   advertId: advertId,
  //   sliderProps: {
  //     shouldGet: false,
  //     limit: 50,
  //     offset: 0,
  //     news_id: advertId,
  //   },
  // });

  // const data = useMemo(() => {
  //   let newData;
  //   if (queryFrom === "news") {
  //     newData = advert?.data?.response;
  //   } else if (queryFrom === "events") {
  //     newData = event?.data?.response;
  //   } else newData = project?.data?.response;
  //   return newData;
  // }, [advert, project, event]);

  // const checkPhotoByLang = (value) => {
  //   if (value?.[`${lang}_photo`]) {
  //     return value?.[`${lang}_photo`];
  //   } else {
  //   }
  // };

  // const sliderData = useMemo(() => {
  //   let currentData;
  //   if (queryFrom === "news") {
  //     currentData = advertSlider?.data?.response
  //       ? [
  //           { file_link: data?.[`${lang}_photo`] },
  //           ...advertSlider?.data?.response,
  //         ]
  //       : [{ file_link: data?.[`${lang}_photo`] }];
  //   } else if (queryFrom === "events") {
  //     currentData = eventSlider?.data?.response
  //       ? [
  //           {
  //             file_link:
  //               data?.[`${lang}_poster`] !== null && data?.[`${lang}_poster`],
  //           },
  //           ...eventSlider?.data?.response,
  //         ]
  //       : [{ file_link: data?.[`${lang}_poster`] }];
  //   } else {
  //     currentData = projectSlider?.data?.response
  //       ? [
  //           {
  //             file_link:
  //               data?.[`${lang}_photo`] !== null && data?.[`${lang}_photo`],
  //           },
  //           ...projectSlider?.data?.response,
  //         ]
  //       : [{ file_link: data?.[`${lang}_photo`] }];
  //   }
  //   return currentData;
  // }, [projectSlider, eventSlider, advertSlider, lang]);

  return (
    <>
      <Slider data={sliderData ?? []} title={title} />
      <Content item={data ? data : {}} router={router} />
      {!queryFrom && <Projects />}
    </>
  );
}
