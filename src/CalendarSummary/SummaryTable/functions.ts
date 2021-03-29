import { CalendarEvent } from "../../api-client";

export const longestEvent = (event_list: CalendarEvent[]):string => {
  const result = event_list.sort(
    (event: CalendarEvent, event2: CalendarEvent) =>
      event2.durationInMinutes - event.durationInMinutes
  );
  return result[0].title;
};

export const totalDuration = (event_list: CalendarEvent[]):number => {
  const result = event_list
    .map((a: CalendarEvent) => a.durationInMinutes)
    .reduce((a, b) => a + b, 0);
  return result;
};
