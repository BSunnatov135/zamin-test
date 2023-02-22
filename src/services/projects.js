import { useQuery } from "react-query";
import { request } from "./http-client";

const getProjectsFn = async (data) =>
  await request.post("/v1/object/get-list/website_projects", {
    data,
  });

const getProjectFn = async (id) =>
  await request.get(`/v1/object/website_projects/${id}`);

const getSliderFn = async (data) =>
  await request.post("/v1/object/get-list/file", {
    data,
  });

const getStoriesFn = async (data) =>
  await request.post("/v1/object/get-list/project_stories", {
    data,
  });

const useProjects = ({
  projectParams,
  projectId,
  sliderProps,
  storiesProps,
}) => {
  const projects = useQuery(
    ["GET_PROJECTS", projectParams],
    () => getProjectsFn(projectParams),
    {
      enabled: !!projectParams,
    }
  );
  const project = useQuery(
    [`GET_PROJECT_${projectId}`, projectId],
    () => getProjectFn(projectId),
    {
      enabled: !!projectId,
    }
  );
  const projectSlider = useQuery(
    [`GET_PROJECT_SLIDER`, sliderProps],
    () => getSliderFn(sliderProps),
    {
      enabled: !!sliderProps,
    }
  );
  const projectStories = useQuery(
    [`GET_PROJECT_STORIES`, storiesProps],
    () => getStoriesFn(storiesProps),
    {
      enabled: !!storiesProps,
    }
  );

  return {
    projects: projects?.data,
    project: project?.data,
    projectSlider: projectSlider?.data,
    projectStories: projectStories?.data,
  };
};

export default useProjects;

export const getProjects = (data) =>
  request.post("/v1/object/get-list/website_projects", {
    data,
  });
