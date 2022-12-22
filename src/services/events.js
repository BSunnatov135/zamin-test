import { useQuery } from "react-query";
import { request } from "./http-client";

const getEventsFn = async (data) =>
  await request.post("/v1/object/get-list/gallery", {
    data,
  });

const getEventFn = async (id) => await request.get(`/v1/object/gallery/${id}`);

const useEvents = ({ eventParams, eventId }) => {
  const events = useQuery(
    ["GET_EVENTS", eventParams],
    () => getEventsFn(eventParams),
    {
      enabled: !!eventParams,
    }
  );
  const event = useQuery(
    [`GET_EVENT_${eventId}`, eventId],
    () => getEventFn(eventId),
    {
      enabled: !!eventId,
    }
  );

  return {
    events: events?.data,
    event: event?.data,
  };
};

export default useEvents;
