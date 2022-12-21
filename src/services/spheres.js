import { useQuery } from "react-query";
import { request } from "./http-client";

const getSpheresFn = async (data) =>
  await request.post("/v1/object/get-list/spheres", {
    data,
  });

const getSphereFn = async (data) =>
  await request.post(`/v1/object/get-list/website_projects`, { data });

const useSpheres = ({ sphereParams, dataSphere, sparesId } = {}) => {
  const spheres = useQuery(
    ["GET_SPHERES", sphereParams],
    () => getSpheresFn(sphereParams),
    {
      enabled: !!sphereParams,
    }
  );
  const sphere = useQuery(
    [`GET_SPHERE_${JSON.stringify(dataSphere)}`, dataSphere],
    () => getSphereFn(dataSphere),
    {
      enabled: !!dataSphere,
    }
  );

  return {
    spheres: spheres?.data,
    sphere: sphere?.data,
  };
};

export default useSpheres;
