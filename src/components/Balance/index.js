import React from "react";
import * as C from "./styles";

export default function Balance({ saldo, gastos }) {
  return (
    <C.Container>
      <C.Item>
        <C.ItemTitle>Saldo</C.ItemTitle>
        <C.Content>
          <C.CurrencySymbol>R$</C.CurrencySymbol>
          <C.Balance>{saldo}</C.Balance>
        </C.Content>
      </C.Item>

      <C.Item>
        <C.ItemTitle>Gastos</C.ItemTitle>
        <C.Content>
          <C.CurrencySymbol>R$</C.CurrencySymbol>
          <C.Expenses>{gastos}</C.Expenses>
        </C.Content>
      </C.Item>
    </C.Container>
  );
}
