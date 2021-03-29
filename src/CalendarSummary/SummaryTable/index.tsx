import React from "react";
import { Table } from "./components/Styled";
import Thead from "./components/Thead";
import Tbody from "./components/Tbody";
import Tfoot from "./components/Tfoot";
import { CalendarEvents } from '../../CalendarSummary';

type Props = {
  events: CalendarEvents;
};

const SummaryTable: React.FunctionComponent<Props> = (props):JSX.Element => {
  return (
    <Table>
      <Thead />
      <Tbody {...props} />
      <Tfoot {...props} />
    </Table>
  ) 
};

export default SummaryTable;
