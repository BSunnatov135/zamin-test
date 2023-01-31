import { useQuery } from "react-query";
import { request } from "./http-client";

const getObjectList = (table_slug, data) =>
  request.post(`/v1/object/get-list/${table_slug}`, data);

const defaultProperties = { enabled: false };

const useObjects = ({
  objectParams,
  table_slug,
  objectProperties = defaultProperties,
}) => {
  const object = useQuery(
    ["GET_EVENTS", table_slug],
    () => getObjectList(table_slug, objectParams),
    objectProperties
  );
  return {
    object: object?.data,
  };
};
export default useObjects;
