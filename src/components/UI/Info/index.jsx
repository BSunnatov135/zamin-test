import Content from "./Context";
import Projects from "components/UI/Projects";
import { useRouter } from "next/router";
import Slider from "components/UI/Slider/Slider";
import RelatedEvents from "components/UI/Event/RelatedEvents";
import useSpheres from "services/spheres";
import RelatedStories from "../Projects/RelatedStories";
import useProjects from "services/projects";

export default function Info({ title, sliderData, data }) {
  const router = useRouter();
  const queryFrom = router?.query?.from;
  const { sphere } = useSpheres({
    dataSphere: {
      offset: 0,
      limit: 3,
      spheres_id: data?.spheres_id,
    },
  });
  const { projectStories } = useProjects({
    storiesProps: {
      website_projects_id: [data?.guid],
    },
  });
  return (
    <>
      <Slider data={sliderData ?? []} title={title} queryFrom={queryFrom} />
      <Content item={data ? data : {}} router={router} />
      {projectStories?.data.count >= 1 && (
        <RelatedStories data={projectStories?.data} />
      )}
      {data?.$website_events_ids_data?.length >= 1 ? (
        <RelatedEvents data={data} />
      ) : null}
    </>
  );
}
