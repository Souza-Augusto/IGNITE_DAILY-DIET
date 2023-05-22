import { Container, Logo, Profile } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo source={require('@assets/images/png/Logo.png')} />
      <Profile source={require('@assets/images/png/Ellipse.png')} />
    </Container>
  );
}
