import React from "react";
import * as C from "./styles";
import { Feather } from "@expo/vector-icons";

export default function Header({ name }) {
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
      <C.Content
        from={{ translateY: -150, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 800, delay: 300 }}
      >
        <C.Username
          from={{ translateX: -300 }}
          animate={{ translateX: 0 }}
          transition={{ type: "timing", duration: 800, delay: 800 }}
        >
          {name}
        </C.Username>
        <C.BtnUser>
          <Feather name="user" size={27} color="#fff" />
        </C.BtnUser>
      </C.Content>
    </C.Container>
  );
}
