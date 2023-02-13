import SEO from "components/SEO";
import Achievements from "components/UI/Achievements";
import Advert from "components/UI/Advert";
import Banner from "components/UI/Banner";
import Event from "components/UI/Event";
import HelpPeople from "components/UI/HelpPeople";
import Partners from "components/UI/Partners";
import Projects from "components/UI/Projects";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const newsScroll = () => {
    let current = scrollRef?.current;
    router.asPath.includes("#news")
      ? setTimeout(() => {
          current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 500)
      : null;
  };
  useEffect(() => {
    setTimeout(() => newsScroll(), 700);
  }, []);
  return (
    <>
      <SEO />
      {/* <Header /> */}
      <Banner />
      <Projects />
      <Partners />
      <HelpPeople />
      <Event />
      <div id="news" ref={scrollRef}>
        <Advert />
      </div>
      <Achievements />
      {/* <Footer /> */}
    </>
  );
}
