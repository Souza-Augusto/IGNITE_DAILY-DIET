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
import { useNavigation } from '@react-navigation/native';

export function MealDetails() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
        <TitleContainer>
          <Title>Refeição</Title>
        </TitleContainer>
      </Header>
      <DetaisMealContainer>
        <Meal>Sanduíche</Meal>
        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>
        <DateTimeTitle>Data e Hora</DateTimeTitle>
        <DateTime>10/09/2023 às 20:00</DateTime>
        <MealTypeContainer>
          <MealType mealType='ONDIET' />
          <MealTypeDescription numberOfLines={1}>
            dentro da dietaaaaa
          </MealTypeDescription>
        </MealTypeContainer>
        <ButtonContainer>
          <Button before={<PencilIcon />} title='Editar Refeição' />
          <Button
            before={<TrashIcon />}
            type='SECONDARY'
            title='Excluir Refeição'
          />
        </ButtonContainer>
      </DetaisMealContainer>
    </Container>
  );
}
