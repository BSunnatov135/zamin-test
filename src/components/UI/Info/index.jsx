import Content from "./Context";
import Projects from "components/UI/Projects";
import { useRouter } from "next/router";
import Slider from "components/UI/Slider/Slider";
import useSpheres from "services/spheres";

export default function Info({ title, sliderData, data }) {
  const router = useRouter();
  const queryFrom = router?.query?.from;
  console.log("infoData", data);
  const { sphere } = useSpheres({
    dataSphere: {
      offset: 0,
      limit: 3,
      spheres_id: data?.spheres_id,
    },
  });
  return (
    <>
      <Slider data={sliderData ?? []} title={title} />
      <Content item={data ? data : {}} router={router} />
      {!queryFrom && <Projects sphere={sphere} />}
    </>
  );
}
