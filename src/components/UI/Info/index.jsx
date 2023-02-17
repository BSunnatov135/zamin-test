import Content from "./Context";
import Projects from "components/UI/Projects";
import { useRouter } from "next/router";
import Slider from "components/UI/Slider/Slider";
import RelatedEvents from "components/UI/Event/RelatedEvents";
import useSpheres from "services/spheres";

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

  return (
    <>
      <Slider data={sliderData ?? []} title={title} queryFrom = {queryFrom}/>
      <Content item={data ? data : {}} router={router} />
      {data?.$website_events_ids_data?.length > 1 ? (
        <RelatedEvents data={data} />
      ) : null}
      {/* {queryFrom && <Projects sphere={sphere} data={data} />} */}
    </>
  );
}
