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

const useProjects = ({ projectParams, projectId, sliderProps }) => {
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

  return {
    projects: projects?.data,
    project: project?.data,
    projectSlider: projectSlider?.data,
  };
};

export default useProjects;

export const getProjects = (data) =>
  request.post("/v1/object/get-list/website_projects", {
    data,
  });
