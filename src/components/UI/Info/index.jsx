import Banner from "./Banner";
import Content from "./Context";
import Projects from "components/UI/Projects";
import { useRouter } from "next/router";
import useProjects from "services/projects";
import useAdverts from "services/advert";
import { useEffect, useState } from "react";

export default function Info() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { project } = useProjects({
    projectId: router.query.info,
  });
  const { advert } = useAdverts({
    advertId: router.query.info,
  });

  useEffect(() => {
    if (router?.query?.from === "news") {
      setData(advert?.data?.response);
    } else setData(project?.data?.response);
  }, [advert, project]);

  return (
    <>
      <Banner item={data ? data : {}} />
      <Content item={data ? data : {}} router={router} />
      {/* {!router.query.key && <Projects />} */}
    </>
  );
}
