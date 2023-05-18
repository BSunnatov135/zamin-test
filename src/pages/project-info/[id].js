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
  const data = project?.data?.response;

  const withCurrentLangData = useMemo(() => {
    if (!projectSlider?.data?.response) return;
    let newArray = [];

    projectSlider.data.response.forEach((element) => {
      let currentEl = element;
      if (
        !currentEl.name.includes("ru") &&
        !currentEl.name.includes("en") &&
        !currentEl.name.includes("uz")
      ) {
        newArray.push(currentEl);
      }
      if (currentEl.name.includes(lang)) {
        newArray.push(currentEl);
      }
    });

    return newArray;
  }, [projectSlider, lang]);

  const sliderData = useMemo(() => {
    if (!withCurrentLangData?.length) return;
    let currentData = withCurrentLangData
      ? [
          {
            file_link: data?.[`${lang}_photo`] && data?.[`${lang}_photo`],
          },
          ...withCurrentLangData,

          {
            file_link: data?.[`${lang}_video`] && data?.[`${lang}_video`],
          },
        ]
      : [{ file_link: data?.[`${lang}_photo`] }];

    return currentData;
  }, [withCurrentLangData, lang, data]);

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
