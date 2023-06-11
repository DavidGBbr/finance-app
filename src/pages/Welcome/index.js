import React from "react";
import { Image } from "react-native";
import * as C from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <C.Container>
      <C.ContainerLogo
        from={{ rotateY: "90deg", opacity: 0 }}
        animate={{ rotateY: "0deg", opacity: 1 }}
        transition={{ type: "timing", duration: 1000 }}
      >
        <Image
          source={require("../../assets/cash.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </C.ContainerLogo>

      <C.ContainerForm
        from={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 1000, delay: 600 }}
      >
        <C.Title>
          Tenha o controle das suas finanças na palma das suas mãos!
        </C.Title>
        <C.Text>Faça login para começar</C.Text>

        <C.Btn onPress={() => navigation.navigate("SignIn")}>
          <C.BtnText>Acessar</C.BtnText>
        </C.Btn>
      </C.ContainerForm>
    </C.Container>
  );
}
