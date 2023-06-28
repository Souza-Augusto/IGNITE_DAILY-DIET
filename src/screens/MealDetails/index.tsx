import { TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Title,
  TitleContainer,
  DetaisMealContainer,
  Meal,
  Description,
  DateTimeTitle,
  DateTime,
  MealTypeContainer,
  MealType,
  MealTypeDescription,
  ButtonContainer,
  Button,
  PencilIcon,
  TrashIcon,
} from './styles';
import ArrowLeft from '@assets/images/svg/ArrowLeftBlack.svg';
import { useRoute, useNavigation } from '@react-navigation/native';
import { mealDetailsParams } from 'src/@types/navigate';
import { DeleteMeal } from '@storage/deleteMeal';

type RouteParams = {
  meal: mealDetailsParams;
};

export function MealDetails() {
  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  async function deleteMeal(meal: mealDetailsParams) {
    await DeleteMeal(meal);
    navigation.goBack();
  }

  return (
    <Container mealType={meal.type}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
        <TitleContainer>
          <Title>Refeição</Title>
        </TitleContainer>
      </Header>
      <DetaisMealContainer>
        <Meal>{meal.name}</Meal>
        <Description>{meal.description}</Description>
        <DateTimeTitle>Data e Hora</DateTimeTitle>
        <DateTime>
          {meal.date} às {meal.hour}
        </DateTime>
        <MealTypeContainer>
          <MealType mealType={meal.type} />
          <MealTypeDescription numberOfLines={1}>
            {meal.type === 'ONDIET' ? 'dentro da dieta' : 'fora da dieta'}
          </MealTypeDescription>
        </MealTypeContainer>
        <ButtonContainer>
          <Button
            onPress={() => navigation.navigate('registerMeal', { meal })}
            before={<PencilIcon />}
            title='Editar Refeição'
          />
          <Button
            onPress={() => deleteMeal(meal)}
            type='SECONDARY'
            title='Excluir Refeição'
          />
        </ButtonContainer>
      </DetaisMealContainer>
    </Container>
  );
}
