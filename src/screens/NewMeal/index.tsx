import { useState } from 'react';
import {
  Container,
  Header,
  InputTitle,
  RegisterMealContainer,
  Title,
  TitleContainer,
  InputDescription,
  DateTimeInputContainer,
  InputMaskContainer,
  DateTime,
  InputMask,
  Question,
  MealsTypeButtonContainer,
  MealsTypeButton,
  MealsType,
  ButtonContainer,
} from './styles';
import ArrowLeft from '@assets/images/svg/ArrowLeftBlack.svg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export function NewMeal() {
  const [onDiet, setOndiet] = useState('');
  const [outDiet, setOutDiet] = useState('');

  const { goBack } = useNavigation();

  function selectedMealType(type: string) {
    if (type === 'INDIET') {
      setOndiet(type);
      setOutDiet('');
      return;
    }
    setOutDiet(type);
    setOndiet('');
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
        <TitleContainer>
          <Title>Nova refeição</Title>
        </TitleContainer>
      </Header>
      <RegisterMealContainer>
        <InputTitle>Nome</InputTitle>
        <Input />
        <InputTitle>Descrição</InputTitle>
        <InputDescription multiline />
        <DateTimeInputContainer>
          <InputMaskContainer>
            <DateTime>Data</DateTime>
            <InputMask />
          </InputMaskContainer>
          <InputMaskContainer>
            <DateTime>Hora</DateTime>
            <InputMask />
          </InputMaskContainer>
        </DateTimeInputContainer>
        <Question>Está dentro da dieta?</Question>
        <MealsTypeButtonContainer>
          <MealsTypeButton
            onPress={() => selectedMealType('INDIET')}
            selectedType={onDiet}
            type='SECONDARY'
            title='SIM'
            before={<MealsType mealType='INDIET' />}
          />
          <MealsTypeButton
            type='SECONDARY'
            selectedType={outDiet}
            onPress={() => selectedMealType('OUTDIET')}
            title='NÃO'
            before={<MealsType mealType='OUTDIET' />}
          ></MealsTypeButton>
        </MealsTypeButtonContainer>
        <ButtonContainer>
          <Button title='Cadastrar refeição' />
        </ButtonContainer>
      </RegisterMealContainer>
    </Container>
  );
}
