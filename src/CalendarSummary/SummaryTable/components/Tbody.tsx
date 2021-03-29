import React from "react";
import { Row, Column } from "./Styled";
import { CalendarEvent } from "../../../api-client";
import { longestEvent, totalDuration } from "../functions";
import { CalendarEvents } from "../..";

type Props = {
  events: CalendarEvents;
};

const Tbody: React.FunctionComponent<Props> = ({ events }):JSX.Element => {
  const single_event: [string, CalendarEvent[]][] = Object.entries(events)
  return (
    <tbody>
      {single_event.map(
          (date: [string, CalendarEvent[]], i: number) => (
            <Row key={i}>
              <Column>{date[0]}</Column>
              <Column>{date[1].length}</Column>
              <Column>{totalDuration(date[1])}</Column>
              <Column>{longestEvent(date[1])}</Column>
            </Row>
          )
        )}
    </tbody>
  );
};

export default Tbody;
