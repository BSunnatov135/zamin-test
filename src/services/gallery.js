import { useQuery } from "react-query";
import { request } from "./http-client";

const getGalleryFn = async (data) =>
  await request.post("/v1/object/get-list/website_gallery", {
    data,
  });

const useGallery = ({ galleryParams }) => {
  const images = useQuery(
    ["GET_GAALLERY", galleryParams],
    () => getGalleryFn(galleryParams),
    {
      enabled: !!galleryParams,
    }
  );

  return {
    images: images?.data,
  };
};

export default useGallery;
