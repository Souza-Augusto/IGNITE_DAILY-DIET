import { Container } from './styles';
import { TextInputProps } from 'react-native';

export function Input({ ...rest }: TextInputProps) {
  return (
    <Container
      {...rest}
      selectionColor='#DDDEDF'
      placeholderTextColor='#DDDEDF'
    ></Container>
  );
}
