import { styled } from "styled-components/native";
import { MotiView } from "moti";

export const Container = styled.View`
  flex: 1;
  background-color: #222727;
`;

export const ContainerLogo = styled(MotiView)`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled(MotiView)`
  flex: 1;
  background-color: #fff;
  border-radius: 25px 25px 0 0;
  padding: 0 5% 0 5%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 14px;
`;

export const Text = styled.Text`
  color: #838485;
`;

export const Btn = styled.TouchableOpacity`
  position: absolute;
  background-color: #222727;
  border-radius: 50px;
  padding: 8px 0 8px 0;
  width: 60%;
  align-self: center;
  bottom: 15%;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
