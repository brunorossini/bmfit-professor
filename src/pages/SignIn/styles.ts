import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Container = styled.View`
  width: 100%;
  padding: 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  border: ${props => (props.isError ? '1px solid red' : '1px solid #333')};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const TextError = styled.Text`
  color: red;
  margin-bottom: 10px;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #333;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 4px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const LabelButton = styled.Text`
  color: #fff;
  font-size: 13px;
  font-family: 'Ubuntu, sans-serif';
`;

export const Link = styled.TouchableOpacity`
  text-align: center;
`;
