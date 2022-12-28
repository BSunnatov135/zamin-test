import { useQuery } from "react-query";
import { request } from "./http-client";

const getAdvertsFn = async (data) =>
  await request.post("/v1/object/get-list/news", {
    data,
  });
const getAdvertFn = async (id) => await request.get(`/v1/object/news/${id}`);
const getSliderFn = async (data) =>
  await request.post("/v1/object/get-list/file", {
    data,
  });

const useAdverts = ({ advertParams, advertId, sliderProps }) => {
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
  const advertSlider = useQuery(
    [`GET_ADVERT_SLIDER`, sliderProps],
    () => getSliderFn(sliderProps),
    {
      enabled: !!sliderProps,
    }
  );

  return {
    adverts: adverts?.data,
    advert: advert?.data,
    advertSlider: advertSlider?.data,
  };
};

export default useAdverts;
