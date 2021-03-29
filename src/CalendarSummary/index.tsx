import React, { useState, useEffect } from 'react';
import { CalendarEvent, getCalendarEvents } from '../api-client';
import SummaryTable from "./SummaryTable";

export interface CalendarEvents {
  [key: string]: CalendarEvent[];
}

const CalendarSummary: React.FunctionComponent = ():JSX.Element => {
  const [events, setEvents] = useState<CalendarEvents>({});
  useEffect(() => {
    const fetchEvents = async () => {
      const all_events: CalendarEvents = {};
      for(let i=0; i<7; i++) {
        const requested_day = new Date();
        requested_day.setDate(requested_day.getDate() + i);
        const obj_name = requested_day.toLocaleDateString();
        all_events[obj_name] = await getCalendarEvents(requested_day)
        // merging Calendar Events for 7 days into one object
      }
      setEvents(all_events)
    };
    fetchEvents();
  }, []);
  return (
      <div>
        <h2>Calendar summary</h2>
        {Object.keys(events).length > 0 ? <SummaryTable events={events} /> : <div>Loading...</div>}
      </div>
    ) 
};

export default CalendarSummary;
