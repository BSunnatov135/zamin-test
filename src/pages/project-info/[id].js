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
  console.log("projectSlider", project);
  const data = project?.data?.response;

  const sliderData = useMemo(() => {
    let currentData = projectSlider?.data?.response
      ? [
          {
            file_link: data?.[`${lang}_photo`] && data?.[`${lang}_photo`],
          },
          ...projectSlider?.data?.response,

          {
            file_link: data?.[`${lang}_video`] && data?.[`${lang}_video`],
          },
        ]
      : [{ file_link: data?.[`${lang}_photo`] }];

    return currentData;
  }, [projectSlider, lang, data]);
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
