import { useQuery } from "react-query";
import { request } from "./http-client";

const getEventsFn = async (data) =>
  await request.post("/v1/object/get-list/website_events", {
    data,
  });
const getEventFn = async (id) =>
  await request.get(`/v1/object/website_events/${id}`);
const getSliderFn = async (data) =>
  await request.post("/v1/object/get-list/file", {
    data,
  });

const useEvents = ({ eventParams, eventId, sliderProps }) => {
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
  const eventSlider = useQuery(
    [`GET_EVENT_SLIDER`, sliderProps],
    () => getSliderFn(sliderProps),
    {
      enabled: !!sliderProps,
    }
  );

  return {
    events: events?.data,
    event: event?.data,
    eventSlider: eventSlider?.data,
  };
};

export default useEvents;
