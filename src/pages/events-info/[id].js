import SEO from "components/SEO";
import Info from "components/UI/Info";
import useEvents from "services/events";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Home() {
  const router = useRouter();
  const { lang } = useTranslation();
  const id = router?.query?.id;
  const { event, eventSlider } = useEvents({
    eventId: id,
    sliderProps: {
      shouldGet: false,
      limit: 50,
      offset: 0,
      website_events_id: id,
    },
  });

  const data = useMemo(() => {
    return event?.data?.response ?? [];
  }, [event]);

  const fileLink = {
    file_link: data?.[`${lang}_video_poster`],
  };
  const withCurrentLangData = useMemo(() => {
    if (!eventSlider?.data?.response?.length && !lang) return;
    const newArray = [];

    eventSlider?.data?.response?.forEach((element) => {
      if (
        !element.name.includes("ru") &&
        !element.name.includes("en") &&
        !element.name.includes("oz")
      ) {
        newArray.push(element);
      }
      if (element.name.includes(lang)) {
        newArray.push(element);
      }
    });

    return newArray;
  }, [eventSlider, lang]);

  let photosArray = [];
  let videosArray = [];
  for (let i = 0; i < withCurrentLangData?.length; i++) {
    if (
      withCurrentLangData[i].type?.toLowerCase() === "jpg" ||
      withCurrentLangData[i].type?.toLowerCase() === "png" ||
      withCurrentLangData[i].type?.toLowerCase() === "jpeg"
    ) {
      photosArray.push(withCurrentLangData[i]);
    } else videosArray.push(withCurrentLangData[i]);
  }

  const sliderRawData = photosArray.concat(videosArray);
  const sliderData = useMemo(() => {
    let currentData;

    currentData = eventSlider?.data?.response
      ? [
          data?.[`${lang}_video_poster`] && fileLink,
          {
            file_link: data?.[`${lang}_poster`] && data?.[`${lang}_poster`],
          },
          ...sliderRawData,
        ]
      : [
          data?.[`${lang}_video_poster`] && fileLink,
          { file_link: data?.[`${lang}_poster`] },
        ];

    return currentData;
  }, [sliderRawData, lang, data]);
  console.log("slidedatandex", sliderData);
  console.log("eventSlider", eventSlider);
  return (
    <>
      <SEO />
      <Info
        sliderData={sliderData ?? []}
        data={data}
        title={
          data?.[`${lang}_name`]
            ? data?.[`${lang}_name`]
            : data?.[`${lang}_header`]
        }
      />
    </>
  );
}
