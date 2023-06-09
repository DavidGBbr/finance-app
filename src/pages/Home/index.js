import React from "react";
import * as C from "./styles";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "17/09/2022",
    type: 0,
  },
  {
    id: 2,
    label: "Pix Cliente X",
    value: "2.500,00",
    date: "20/09/2022",
    type: 1,
  },
  {
    id: 3,
    label: "Salário",
    value: "7.200,00",
    date: "22/09/2022",
    type: 1,
  },
];

export default function Home() {
  return (
    <C.Container>
      <Header name="David" />
      <Balance saldo="R$20.398,79" gastos="-527,00" />
      <C.Title>Últimas movimentações</C.Title>
      <C.List
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </C.Container>
  );
}
