import { useQuery } from "react-query";
import { request } from "./http-client";

const getAdvertsFn = async (data) =>
  await request.post("/v1/object/get-list/news", {
    data,
  });

const useAdverts = ({ advertParams }) => {
  const adverts = useQuery(
    ["GET_ADVERTS", advertParams],
    () => getAdvertsFn(advertParams),
    {
      enabled: !!advertParams,
    }
  );

  return {
    adverts: adverts?.data,
  };
};

export default useAdverts;
