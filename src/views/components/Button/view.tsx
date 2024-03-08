import { ReactNode } from 'react';

import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  before?: ReactNode;
  type?: ButtonTypeStyleProps;
};

export function Button({
  before,
  type = 'PRIMARY',
  title,
  style,
  ...rest
}: Props) {
  return (
    <Container type={type} style={style} activeOpacity={0.5} {...rest}>
      {before}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
