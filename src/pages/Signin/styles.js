import { styled } from "styled-components/native";
import { MotiView } from "moti";

export const Container = styled(MotiView)`
  flex: 1;
  background-color: #222727;
`;

export const ContainerHeader = styled(MotiView)`
  margin-top: 14%;
  margin-bottom: 8%;
  padding-left: 5%;
`;

export const ContainerForm = styled(MotiView)`
  background-color: #fff;
  flex: 1;
  border-radius: 25px 25px 0 0;
  padding: 0 5% 0 5%;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 28px;
`;

export const Message = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  height: 40px;
  margin-bottom: 12px;
  font-size: 16px;
`;

export const Btn = styled.TouchableOpacity`
  background-color: #222727;
  width: 100%;
  border-radius: 4px;
  padding: 4px 0 4px 0;
  margin-top: 14px;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const BtnRegister = styled.TouchableOpacity`
  margin-top: 14px;
  align-self: center;
`;

export const RegisterText = styled.Text`
  color: #838485;
`;
