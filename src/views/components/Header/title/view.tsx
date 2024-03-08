import { Container, HeaderTitle } from './styles';

interface Props {
  title: string;
}

export function Title({ title }: Props) {
  return (
    <Container>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
}
