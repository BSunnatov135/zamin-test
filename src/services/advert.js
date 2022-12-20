import { useQuery } from "react-query";
import { request } from "./http-client";

const getAdvertsFn = async (data) =>
  await request.post("/v1/object/get-list/news", {
    data,
  });
const getAdvertFn = async (id) => await request.get(`/v1/object/news/${id}`);

const useAdverts = ({ advertParams, advertId }) => {
  const adverts = useQuery(
    ["GET_ADVERTS", advertParams],
    () => getAdvertsFn(advertParams),
    {
      enabled: !!advertParams,
    }
  );
  const advert = useQuery(
    [`GET_ADVERT_${advertId}`, advertId],
    () => getAdvertFn(advertId),
    {
      enabled: !!advertId,
    }
  );

  return {
    adverts: adverts?.data,
    advert: advert?.data,
  };
};

export default useAdverts;
