import { styled } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
`;

export const OptionContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const OutlineCircle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-color: #fff;
  border-width: 2px;
  justify-content: center;
  align-items: center;
`;

export const InnerCircle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #fff;
`;

export const Txt = styled.Text`
  font-size: 14px;
  margin-left: 4px;
  color: #fff;
`;
