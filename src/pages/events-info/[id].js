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

  const sliderData = useMemo(() => {
    let currentData;

    currentData = eventSlider?.data?.response
      ? [
          {
            file_link: data?.[`${lang}_poster`] && data?.[`${lang}_poster`],
          },
          ...eventSlider?.data?.response,
        ]
      : [{ file_link: data?.[`${lang}_poster`] }];

    return currentData;
  }, [eventSlider, lang, data]);

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
