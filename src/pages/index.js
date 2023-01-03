import SEO from "components/SEO";
import Achievements from "components/UI/Achievements";
import Advert from "components/UI/Advert";
import Banner from "components/UI/Banner";
import Event from "components/UI/Event";
import Footer from "components/UI/Footer/Footer";
import Header from "components/UI/Header/Header";
import HelpPeople from "components/UI/HelpPeople";
import Partners from "components/UI/Partners";
import Projects from "components/UI/Projects";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import scrollToRef from "mixins/scrollToRef";

export default function Home() {
  const router = useRouter();
  const advertsRef = useSelector((state) => state.scrollRef.advertsRef);
  const eventsRef = useSelector((state) => state.scrollRef.eventsRef);

  useEffect(() => {
    if (router?.query?.srcoll === "advert" && advertsRef) {
      router.push("/", undefined, { scroll: false });
      setTimeout(() => {
        scrollToRef(0, advertsRef - 100);
      }, 1000);
    }
  }, [router, advertsRef]);

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
