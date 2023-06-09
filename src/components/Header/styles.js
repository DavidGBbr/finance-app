import { styled } from "styled-components/native";

export const Container = styled.View`
  background: #0f0f0f;
  flex-direction: row;
  padding: 0px 16px 44px 16px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Username = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const BtnUser = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 22px;
`;
