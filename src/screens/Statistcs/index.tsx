import {
  BackIcon,
  Description,
  Container,
  Percentage,
  StatisticsContainer,
  StatistcsTitle,
  Card,
  Amount,
  CardDescription,
  MealsTypeContainer,
  MealsTypeCard,
} from './styles';
import ArrowLeft from '@assets/images/svg/ArrowLeft.svg';
import { useNavigation } from '@react-navigation/native';

export function Statistics() {
  const navigation = useNavigation();

  return (
    <Container>
      <BackIcon activeOpacity={0.5} onPress={() => navigation.goBack()}>
        <ArrowLeft />
      </BackIcon>
      <Percentage>90,86%</Percentage>
      <Description>das refeições dentro da sua dieta</Description>
      <StatisticsContainer>
        <StatistcsTitle>Estatísticas gerais</StatistcsTitle>
        <Card>
          <Amount>22</Amount>
          <CardDescription>
            Melhor sequência de pratos dentro da dieta
          </CardDescription>
        </Card>
        <Card>
          <Amount>109</Amount>
          <CardDescription>Refeições Registradas</CardDescription>
        </Card>
        <MealsTypeContainer>
          <MealsTypeCard type={'GREEN'}>
            <Amount>22</Amount>
            <CardDescription numberOfLines={2}>
              refeições dentro da dieta
            </CardDescription>
          </MealsTypeCard>
          <MealsTypeCard>
            <Amount>109</Amount>
            <CardDescription numberOfLines={2}>
              {' '}
              refeições fora da dieta
            </CardDescription>
          </MealsTypeCard>
        </MealsTypeContainer>
      </StatisticsContainer>
    </Container>
  );
}
