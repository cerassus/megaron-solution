import React from "react";
import { Row, Heading } from "./Styled";

const Thead: React.FunctionComponent<{}> = ():JSX.Element => (
    <thead>
      <Row>
        <Heading>Date</Heading>
        <Heading>Number of events</Heading>
        <Heading>Total duration [min]</Heading>
        <Heading>Longest event</Heading>
      </Row>
    </thead>
)

export default Thead