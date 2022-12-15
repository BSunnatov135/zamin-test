import Banner from "./Banner";
import Content from "./Context";
import Projects from "components/UI/Projects";
import { useRouter } from "next/router";
import useProjects from "services/projects";

export default function Info() {
  const router = useRouter();
  const { project } = useProjects({
    projectId: router.query.info,
  });

  return (
    <>
      <Banner item={project?.data?.response} />
      <Content item={project?.data?.response} router={router} />
      {!router.query.key && <Projects />}
    </>
  );
}
