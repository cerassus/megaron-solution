import React from "react";
import { CalendarEvents } from "../..";
import { CalendarEvent } from "../../../api-client";
import { longestEvent, totalDuration } from "../functions";
import { Row, Column } from "./Styled";

type Props = {
  events: CalendarEvents;
};

const Tfoot: React.FunctionComponent<Props> = ({ events }):JSX.Element => {
  const total_events: CalendarEvent[] = Object.values(events).flat()
  return (
    <tfoot>
      <Row>
        <Column>Total</Column>
        <Column>{total_events.length}</Column>
        <Column>{totalDuration(total_events)}</Column>
        <Column>{longestEvent(total_events)}</Column>
      </Row>
    </tfoot>
  );
};

export default Tfoot;
