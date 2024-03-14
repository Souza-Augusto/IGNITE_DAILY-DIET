import { Container, LoadIndicator } from './styles';

export function Loading() {
  return (
    <Container>
      <LoadIndicator testID='component-loading' />
    </Container>
  );
}
