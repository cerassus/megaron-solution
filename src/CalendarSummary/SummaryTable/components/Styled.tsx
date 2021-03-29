import styled from "styled-components";

export const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #fafaf2;
  }
`

export const Table = styled.table`
  text-align: center;
  background-color: #fcfcfc;
  border-spacing: 0;
  box-shadow: 0 0 5px #b6b6b6;
  & > *:last-child {
    font-weight: 500;
  }
`

export const Column = styled.td`
  border: 1px solid #ececec;
  padding: 10px;
`

export const Heading = styled.th`
  font-weight: 800;
  border: 1px solid #ececec;
  padding: 10px;
`

