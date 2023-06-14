import { styled } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 5%;
  background-color: #222727;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 28px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "gray",
})`
  color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  height: 40px;
  margin-bottom: 12px;
  font-size: 16px;
`;

export const AddBtn = styled.TouchableOpacity`
  background-color: #f1f1f1;
  margin-top: 80px;
  padding: 10px;
  border-radius: 10px;
`;
