import React, { useState } from "react";
import * as C from "./styles";
import { AnimatePresence } from "moti";

export default function Movements({ data }) {
  const [showValue, setShowValue] = useState(false);

  return (
    <C.Container onPress={() => setShowValue(!showValue)}>
      <C.Date>{data.date}</C.Date>
      <C.Content>
        <C.Label>{data.label}</C.Label>
        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <C.Value
              style={{ color: data.type === 0 ? "#66bb6a" : "#ef5350" }}
              from={{ translateX: 100 }}
              animate={{ translateX: 0 }}
              transition={{
                type: "spring",
                duration: 500,
              }}
            >
              {data.type === 0 ? `R$ ${data.value}` : `R$ -${data.value}`}
            </C.Value>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <C.Skeleton
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "timing",
              }}
            ></C.Skeleton>
          </AnimatePresence>
        )}
      </C.Content>
    </C.Container>
  );
}
