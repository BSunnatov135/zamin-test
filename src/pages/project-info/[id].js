import SEO from "components/SEO";
import Info from "components/UI/Info";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useMemo } from "react";
import useProjects from "services/projects";

export default function Home() {
  const router = useRouter();
  const { lang } = useTranslation();
  const id = router?.query?.id;
  const { project, projectSlider } = useProjects({
    projectId: id,
    sliderProps: {
      shouldGet: false,
      limit: 50,
      offset: 0,
      website_projects_id: id,
    },
  });
  console.log("projectSlider", projectSlider);
  const data = useMemo(() => {
    return project?.data?.response;
  }, [project]);

  const withCurrentLangData = useMemo(() => {
    if (!projectSlider?.data?.response?.length && !lang) return;
    const newArray = [];

    projectSlider?.data?.response?.forEach((element) => {
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
  }, [projectSlider, lang]);

  let photosArray = [];
  let videosArray = [];
  for (let i = 0; i < withCurrentLangData?.length; i++) {
    if (
      withCurrentLangData[i].type === "jpg" ||
      withCurrentLangData[i].type === "png" ||
      withCurrentLangData[i].type === "jpeg"
    ) {
      photosArray.unshift(withCurrentLangData[i]);
    } else videosArray.unshift(withCurrentLangData[i]);
  }
  console.log("data, =", data);
  const sliderRawData = photosArray.concat(videosArray);

  const sliderData = useMemo(() => {
    if (!data?.guid) return;
    let currentData = sliderRawData
      ? [
          {
            file_link: data?.[`${lang}_photo`] && data?.[`${lang}_photo`],
          },
          ...sliderRawData,

          {
            file_link: data?.[`${lang}_video`] && data?.[`${lang}_video`],
          },
        ]
      : [{ file_link: data?.[`${lang}_photo`] && data?.[`${lang}_photo`] }];

    return currentData;
  }, [sliderRawData, lang, data]);
  console.log("sliderdata", videosArray);
  return (
    <>
      <SEO />

      <Info
        sliderData={sliderData}
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
