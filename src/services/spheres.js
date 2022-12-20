import { useQuery } from "react-query";
import { request } from "./http-client";

const getSpheresFn = async (data) =>
  await request.post("/v1/object/get-list/spheres", {
    data,
  });

const getSphereFn = async (id) =>
  await request.get(`/v1/object/website_projects/${id}`);

const useSpheres = ({ sphereParams, sphereId } = {}) => {
  const spheres = useQuery(
    ["GET_SPHERES", sphereParams],
    () => getSpheresFn(sphereParams),
    {
      enabled: !!sphereParams,
    }
  );
  const sphere = useQuery(
    [`GET_SPHERE_${sphereId}`, sphereId],
    () => getSphereFn(sphereId),
    {
      enabled: !!sphereId,
    }
  );

  return {
    spheres: spheres?.data,
    sphere: sphere?.data,
  };
};

export default useSpheres;
