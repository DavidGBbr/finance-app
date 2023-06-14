import React, { useContext } from "react";
import * as C from "./styles";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
import { AuthContext } from "../../contexts/auth";
import Modal from "../../components/Modal";

export default function Home() {
  const { list } = useContext(AuthContext);

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

  const totalEntrances = calculateTotal(list, 0);
  const totalExpenses = calculateTotal(list, 1);

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
      <Modal />
    </C.Container>
  );
}
