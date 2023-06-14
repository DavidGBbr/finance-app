import React, { useContext, useState } from "react";
import * as C from "./styles";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
import Radio from "../Radio";
import { AuthContext } from "../../contexts/auth";

export default function ActionModal({ handleClose }) {
  const [selected, setSelected] = useState(0);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const { addItemList } = useContext(AuthContext);

  return (
    <C.Container>
      <TouchableOpacity
        style={{ flexDirection: "row-reverse" }}
        onPress={handleClose}
      >
        <AntDesign name="closecircleo" size={24} color="#ef5350" />
      </TouchableOpacity>
      <View>
        <C.Label>Descrição da transação</C.Label>
        <C.Input
          placeholder="Descrição da transação..."
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <C.Label>Valor da transação</C.Label>
        <C.Input
          placeholder="Valor da transação..."
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <C.Label>Data da transação</C.Label>
        <C.Input
          placeholder="(dd/mmm/aaaa)"
          value={date}
          onChangeText={(text) => setDate(text)}
        />
        <Radio
          selected={selected}
          options={["Entrada", "Saída"]}
          onChangeSelect={(opt, i) => {
            setSelected(i);
          }}
        />
        <C.AddBtn
          onPress={() => {
            addItemList(description, value, date, selected);
            handleClose();
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Nova transação
          </Text>
        </C.AddBtn>
      </View>
    </C.Container>
  );
}
