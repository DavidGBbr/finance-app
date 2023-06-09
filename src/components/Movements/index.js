import React from "react";
import * as C from "./styles";

export default function Movements({ data }) {
  return (
    <C.Container>
      <C.Date>{data.date}</C.Date>
      <C.Content>
        <C.Label>{data.label}</C.Label>
        <C.Value style={{ color: data.type === 1 ? "#66bb6a" : "#ef5350" }}>
          {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
        </C.Value>
      </C.Content>
    </C.Container>
  );
}
