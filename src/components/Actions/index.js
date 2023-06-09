import React from "react";
import * as C from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <C.Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <C.ActionBtn>
        <C.AreaBtn>
          <AntDesign name="addfolder" size={26} color="#000" />
        </C.AreaBtn>
        <C.LabelBtn>Entradas</C.LabelBtn>
      </C.ActionBtn>

      <C.ActionBtn>
        <C.AreaBtn>
          <AntDesign name="tagso" size={26} color="#000" />
        </C.AreaBtn>
        <C.LabelBtn>Compras</C.LabelBtn>
      </C.ActionBtn>

      <C.ActionBtn>
        <C.AreaBtn>
          <AntDesign name="creditcard" size={26} color="#000" />
        </C.AreaBtn>
        <C.LabelBtn>Carteira</C.LabelBtn>
      </C.ActionBtn>

      <C.ActionBtn>
        <C.AreaBtn>
          <AntDesign name="barcode" size={26} color="#000" />
        </C.AreaBtn>
        <C.LabelBtn>Boletos</C.LabelBtn>
      </C.ActionBtn>

      <C.ActionBtn>
        <C.AreaBtn>
          <AntDesign name="setting" size={26} color="#000" />
        </C.AreaBtn>
        <C.LabelBtn>Conta</C.LabelBtn>
      </C.ActionBtn>
    </C.Container>
  );
}
