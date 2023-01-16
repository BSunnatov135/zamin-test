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

  return (
    <>
      <Slider data={sliderData ?? []} title={title} />
      <Content item={data ? data : {}} router={router} />
      {!queryFrom && <Projects />}
    </>
  );
}
