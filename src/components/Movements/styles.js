import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 24px;
  border-bottom-width: 0.5px;
  border-bottom-color: black;
`;

export const Date = styled.Text`
  color: #dadada;
  font-weight: bold;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #66bb6a;
`;
