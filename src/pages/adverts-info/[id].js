import SEO from "components/SEO";
import Info from "components/UI/Info";
import useAdverts from "services/advert";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Home() {
  const router = useRouter();
  const { lang } = useTranslation();
  const id = router?.query?.id;
  const { advert, advertSlider } = useAdverts({
    advertId: id,
    sliderProps: {
      shouldGet: false,
      limit: 50,
      offset: 0,
      news_id: id,
    },
  });

  const data = useMemo(() => {
    return advert?.data?.response ?? [];
  }, [advert]);

  const sliderData = useMemo(() => {
    let currentData;

    currentData = advertSlider?.data?.response
      ? [
          {
            file_link: data?.[`${lang}_photo`] && data?.[`${lang}_photo`],
          },
          ...advertSlider?.data?.response,
        ]
      : [{ file_link: data?.[`${lang}_photo`] }];

    return currentData;
  }, [advertSlider, lang]);

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
