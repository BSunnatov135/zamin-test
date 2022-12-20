import Banner from "./Banner";
import Content from "./Context";
import Projects from "components/UI/Projects";
import { useRouter } from "next/router";
import useProjects from "services/projects";
import useAdverts from "services/advert";

export default function Info() {
  const router = useRouter();
  const { project } = useProjects({
    projectId: router.query.info,
  });
  const { advert } = useAdverts({
    advertId: router.query.info,
  });

  console.log("adver", advert?.data);

  return (
    <>
      <Banner
        item={
          router?.query?.from === "news"
            ? advert?.data?.response
            : project?.data?.response
        }
      />
      <Content
        item={
          router?.query?.from === "news"
            ? advert?.data?.response
            : project?.data?.response
        }
        router={router}
      />
      {/* {!router.query.key && <Projects />} */}
    </>
  );
}
