import { styled } from "styled-components/native";

export const Container = styled.ScrollView`
  max-height: 84px;
  margin-top: 18px;
  margin-bottom: 24px;
  padding: 0px 14px;
`;

export const ActionBtn = styled.TouchableOpacity`
  align-items: center;
  margin-right: 32px;
`;

export const AreaBtn = styled.View`
  background-color: #dadada;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const LabelBtn = styled.Text`
  margin-top: 4px;
  text-align: center;
  font-weight: bold;
`;
