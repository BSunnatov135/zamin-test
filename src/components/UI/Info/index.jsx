import Content from "./Context";
import Projects from "components/UI/Projects";
import { useRouter } from "next/router";
import Slider from "components/UI/Slider/Slider";

export default function Info({ title, sliderData, data }) {
  const router = useRouter();
  const queryFrom = router?.query?.from;
  console.log("projectData==>", data);
  return (
    <>
      <Slider data={sliderData ?? []} title={title} />
      <Content item={data ? data : {}} router={router} />
      {!queryFrom && <Projects />}
    </>
  );
}
