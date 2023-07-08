import { useState } from 'react';
import { Alert, Modal, TouchableOpacity } from 'react-native';
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
  DialogContainer,
  Dialog,
  DialogTitle,
  DialogButtonsContainer,
  CancelButton,
  ConfirmButton,
  CancelButtonTitle,
  ConfirmButtonTitle,
} from './styles';
import ArrowLeft from '@assets/images/svg/ArrowLeftBlack.svg';
import Trash from '@assets/images/svg/Trash.svg';
import { useRoute, useNavigation } from '@react-navigation/native';

import { DeleteMeal } from '@storage/deleteMeal';
import { mealDTO } from 'src/dtos/mealDTO';

type RouteParams = {
  meal: mealDTO;
};

export function MealDetails() {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  async function deleteMeal() {
    try {
      setModalVisible(false);
      await DeleteMeal(meal);
      navigation.navigate('home');
    } catch (error) {
      console.log(error);
      Alert.alert('Refeição', 'Não foi possível excluir a refeição.');
    }
  }

  return (
    <Container mealType={meal.healthy}>
      <Modal transparent visible={modalVisible}>
        <DialogContainer>
          <Dialog>
            <DialogTitle>
              Deseja realmente excluir o registro da refeição?
            </DialogTitle>
            <DialogButtonsContainer>
              <CancelButton onPress={() => setModalVisible(false)}>
                <CancelButtonTitle numberOfLines={1}>
                  Cancelar
                </CancelButtonTitle>
              </CancelButton>
              <ConfirmButton onPress={deleteMeal}>
                <ConfirmButtonTitle>Sim, excluir</ConfirmButtonTitle>
              </ConfirmButton>
            </DialogButtonsContainer>
          </Dialog>
        </DialogContainer>
      </Modal>
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
          <MealType mealType={meal.healthy} />
          <MealTypeDescription numberOfLines={1}>
            {meal.healthy ? 'dentro da dieta' : 'fora da dieta'}
          </MealTypeDescription>
        </MealTypeContainer>
        <ButtonContainer>
          <Button
            onPress={() => navigation.navigate('registerMeal', { meal })}
            before={<PencilIcon />}
            title='Editar Refeição'
          />
          <Button
            before={<Trash />}
            onPress={() => setModalVisible(true)}
            type='SECONDARY'
            title='Excluir Refeição'
          />
        </ButtonContainer>
      </DetaisMealContainer>
    </Container>
  );
}
