import React from "react";
import * as C from "./styles";

export default function Balance({ saldo, gastos }) {
  return (
    <C.Container
      from={{ rotateX: "-100deg", opacity: 0 }}
      animate={{
        rotateX: "0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        delay: 300,
        duration: 900,
      }}
    >
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
