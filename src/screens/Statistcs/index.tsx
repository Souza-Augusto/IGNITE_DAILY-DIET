import { useCallback } from 'react';
import {
  BackIconContainer,
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
  BackIcon,
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { mealDTO } from 'src/dtos/mealDTO';
import { CountHealthyMeals } from '@utils/meals/countHealthyMeals';
import { CountMeals } from '@utils/meals/countMeals';

type RouteParams = {
  meals: {
    title: string;
    data: mealDTO[];
  }[];
};

type sectionListDataProps = {
  title: string;
  data: mealDTO[];
};

export function Statistics() {
  const navigation = useNavigation();

  const route = useRoute();
  const { meals } = route.params as RouteParams;

  function mergeData(meals: sectionListDataProps[]) {
    const mergedArray = [] as mealDTO[];

    meals.forEach((item) => {
      item.data.forEach((dataItem) => {
        mergedArray.push(dataItem);
      });
    });
    return findLongestSequence(mergedArray);
  }

  function findLongestSequence(data: mealDTO[]) {
    let maxSequence = 0;
    let currentSequence = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].healthy === true) {
        currentSequence++;
        if (currentSequence > maxSequence) {
          maxSequence = currentSequence;
        }
      } else {
        currentSequence = 0;
      }
    }

    return maxSequence;
  }

  return (
    <Container
      percentege={(CountHealthyMeals(meals) / CountMeals(meals)) * 100}
    >
      <BackIconContainer
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
      >
        <BackIcon
          name='arrowleft'
          size={30}
          percentege={(CountHealthyMeals(meals) / CountMeals(meals)) * 100}
        />
      </BackIconContainer>
      <Percentage>
        {String(
          `${((CountHealthyMeals(meals) / CountMeals(meals)) * 100)
            .toFixed(2)
            .replace('.', ',')}${'%'}`
        )}
      </Percentage>
      <Description>das refeições dentro da sua dieta</Description>
      <StatisticsContainer>
        <StatistcsTitle>Estatísticas gerais</StatistcsTitle>
        <Card>
          <Amount>{String(mergeData(meals))}</Amount>
          <CardDescription>
            Melhor sequência de pratos dentro da dieta
          </CardDescription>
        </Card>
        <Card>
          <Amount>{String(CountMeals(meals))}</Amount>
          <CardDescription>Refeições Registradas</CardDescription>
        </Card>
        <MealsTypeContainer>
          <MealsTypeCard type={'GREEN'}>
            <Amount>{CountHealthyMeals(meals)}</Amount>
            <CardDescription numberOfLines={2}>
              refeições dentro da dieta
            </CardDescription>
          </MealsTypeCard>
          <MealsTypeCard>
            <Amount>
              {String(CountMeals(meals) - CountHealthyMeals(meals))}
            </Amount>
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
