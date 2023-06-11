import React from "react";
import { View, Text } from "react-native";
import * as C from "./styles";

export default function SignIn() {
  return (
    <C.Container>
      <C.ContainerHeader
        from={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 1000 }}
      >
        <C.Message>Bem vindo(a)</C.Message>
      </C.ContainerHeader>

      <C.ContainerForm
        from={{ translateY: 200 }}
        animate={{ translateY: 0 }}
        transition={{ type: "timing", duration: 800 }}
      >
        <C.Title>Email</C.Title>
        <C.Input placeholder="Digite um email..." />

        <C.Title>Senha</C.Title>
        <C.Input placeholder="Sua senha" />

        <C.Btn>
          <C.BtnText>Acessar</C.BtnText>
        </C.Btn>

        <C.BtnRegister>
          <C.RegisterText>Não possui conta? Cadastre-se</C.RegisterText>
        </C.BtnRegister>
      </C.ContainerForm>
    </C.Container>
  );
}
