import React from "react";
import * as C from "./styles";

export default function Radio({ options = [], onChangeSelect, selected }) {
  return (
    <C.Container>
      {options.map((opt, index) => (
        <C.OptionContainer
          onPress={() => onChangeSelect(opt, index)}
          key={index}
        >
          <C.OutlineCircle>
            {selected === index && <C.InnerCircle />}
          </C.OutlineCircle>
          <C.Txt>{opt}</C.Txt>
        </C.OptionContainer>
      ))}
    </C.Container>
  );
}
