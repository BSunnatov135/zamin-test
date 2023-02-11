import SEO from "components/SEO";
import Achievements from "components/UI/Achievements";
import Advert from "components/UI/Advert";
import Banner from "components/UI/Banner";
import Event from "components/UI/Event";
import HelpPeople from "components/UI/HelpPeople";
import Partners from "components/UI/Partners";
import Projects from "components/UI/Projects";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import scrollToRef from "mixins/scrollToRef";
import { setScrollSectionName } from "store/scrollFunctionSlice/scrollFunctionSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const advertsRef = useSelector((state) => state.scrollRef.advertsRef);
  const eventsRef = useSelector((state) => state.scrollRef.eventsRef);
  const scrollSectionName = useSelector(
    (state) => state.scrollRef.scrollSectionName
  );

  useEffect(() => {
    if (scrollSectionName === "advert" && advertsRef) {
      scrollToRef(0, advertsRef - 100);
    }

    setTimeout(() => {
      dispatch(setScrollSectionName(""));
    }, 0);
  }, [router, advertsRef, scrollSectionName, eventsRef]);

  return (
    <>
      <SEO />
      {/* <Header /> */}
      <Banner />
      <Projects />
      <Partners />
      <HelpPeople />
      <Event />
      <Advert />
      <Achievements />
      {/* <Footer /> */}
    </>
  );
}
