import React, { useContext } from "react";
import * as C from "./styles";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
import { AuthContext } from "../../contexts/auth";

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
  function calculateTotal(list, type) {
    const filteredList = list.filter((movement) => movement.type === type);
    const total = filteredList
      .map((movement) =>
        parseFloat(movement.value.replace(/\./g, "").replace(",", "."))
      )
      .reduce((a, b) => a + b);

    return total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const totalEntrances = calculateTotal(list, 1);
  const totalExpenses = calculateTotal(list, 0);

  const { userName } = useContext(AuthContext);

  return (
    <C.Container>
      <Header name={userName} />
      <Balance saldo={totalEntrances} gastos={`-${totalExpenses}`} />
      <Actions />
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
