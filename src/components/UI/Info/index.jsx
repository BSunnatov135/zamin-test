import Banner from "./Banner";
import Content from "./Context";
import Projects from "components/UI/Projects";
import { useRouter } from "next/router";
import useProjects from "services/projects";
import useAdverts from "services/advert";
import useEvents from "services/events";
import { useEffect, useState } from "react";
import Slider from "../Slider/Index";

export default function Info() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const queryFrom = router?.query?.from;
  const { project } = useProjects({
    projectId: router.query.info,
  });
  const { event } = useEvents({
    eventId: router.query.info,
  });
  const { advert } = useAdverts({
    advertId: router.query.info,
  });

  console.log("data=", event?.data);

  useEffect(() => {
    if (queryFrom === "news") {
      setData(advert?.data?.response);
    } else if (queryFrom === "events") {
      setData(event?.data?.response);
    } else setData(project?.data?.response);
  }, [advert, project, event]);

  console.log(event);
  return (
    <>
      {project && !queryFrom && <Banner item={data ? data : {}} />}
      <Slider item={data ? data : {}} />
      <Content item={data ? data : {}} router={router} />
      {!queryFrom && <Projects />}
    </>
  );
}
