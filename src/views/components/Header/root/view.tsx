import { ReactNode } from 'react';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  children?: ReactNode;
  backButton?: boolean;
};

export function Root({ leftElement, rightElement, children }: Props) {
  return (
    <Container>
      {leftElement}
      {children}
      {rightElement}
    </Container>
  );
}
