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
} from './styles';
import ArrowLeft from '@assets/images/svg/ArrowLeftBlack.svg';
import Trash from '@assets/images/svg/Trash.svg';
import { Dialog } from '@components/dialog/view';
import { useMealDetailsViewModel } from './view-model';

export function MealDetails() {
  const {
    alert,
    deleteMeal,
    dialogMessage,
    dialogVisible,
    meal,
    handleNavigationRegisterMeal,
    handleGoBack,
    setDialogVisible,
    dialogPositiveButtonTitle,
  } = useMealDetailsViewModel();

  return (
    <Container mealType={meal.healthy}>
      <Dialog
        dialogVisible={dialogVisible}
        dialogMessage={dialogMessage}
        positiveFunction={deleteMeal}
        negativeFunction={() => setDialogVisible(false)}
        positiveButtonTitle={dialogPositiveButtonTitle}
        negativeButtonTitle='Não'
      />

      <Header>
        <TouchableOpacity onPress={handleGoBack}>
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
          <MealType mealType={meal.healthy} />
          <MealTypeDescription numberOfLines={1}>
            {meal.healthy ? 'dentro da dieta' : 'fora da dieta'}
          </MealTypeDescription>
        </MealTypeContainer>
        <ButtonContainer>
          <Button
            onPress={handleNavigationRegisterMeal}
            before={<PencilIcon />}
            title='Editar Refeição'
          />
          <Button
            before={<Trash />}
            onPress={alert}
            type='SECONDARY'
            title='Excluir Refeição'
          />
        </ButtonContainer>
      </DetaisMealContainer>
    </Container>
  );
}