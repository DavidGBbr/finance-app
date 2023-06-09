import React from "react";
import * as C from "./styles";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({ name }) {
  return (
    <C.Container style={{ paddingTop: statusBarHeight }}>
      <C.Content>
        <C.Username>{name}</C.Username>
        <C.BtnUser>
          <Feather name="user" size={27} color="#fff" />
        </C.BtnUser>
      </C.Content>
    </C.Container>
  );
}
