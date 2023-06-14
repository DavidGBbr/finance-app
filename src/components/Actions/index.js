import React, { useContext } from "react";
import * as C from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";

export default function Actions() {
  const { setVisibleModal } = useContext(AuthContext);

  return (
    <C.Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <C.ActionBtn onPress={() => setVisibleModal(true)}>
        <C.AreaBtn>
          <AntDesign name="addfolder" size={26} color="#000" />
        </C.AreaBtn>
        <C.LabelBtn>Entrada</C.LabelBtn>
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
