import { useEffect, useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
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
  Question,
  MealsTypeButtonContainer,
  MealsType,
  DateTimeInput,
  OffDietButton,
  HealthyMealButton,
} from './styles';
import ArrowLeft from '@assets/images/svg/ArrowLeftBlack.svg';
import { Button } from '@components/Button/view';
import { Input } from '@components/Input/view';
import { ScrollView } from 'react-native';

import { Loading } from '@components/Loading/view';
import { useRegisterMealViewModel } from './view-model';
import { Dialog } from '@components/dialog/view';

export function RegisterMeal() {
  const {
    date,
    description,
    dialogMessage,
    dialogVisible,
    setDialogVisible,
    handleGoBack,
    healthy,
    hour,
    isLoading,
    name,
    setDate,
    setDescription,
    setHealthy,
    setHour,
    setName,
    handleRegisterMeal,
    params,
  } = useRegisterMealViewModel();

  useEffect(() => {
    if (params?.meal) {
      console.log('caiu no if', params);
      setName(params?.meal.name);
      setDescription(params?.meal.description);
      setDate(params?.meal.date);
      setHour(params?.meal.hour);
      setHealthy(params?.meal.healthy);
    }
  }, []);
  if (isLoading) {
    <Loading />;
  }
  return (
    <Container>
      <Dialog
        negativeButtonTitle='Fechar'
        negativeFunction={() => setDialogVisible(false)}
        dialogMessage={dialogMessage}
        dialogVisible={dialogVisible}
      />
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeft />
        </TouchableOpacity>
        <TitleContainer>
          <Title>Nova refeição</Title>
        </TitleContainer>
      </Header>
      <RegisterMealContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <InputTitle>Nome</InputTitle>

          <Input
            placeholder='Ex: Saduíche'
            value={name}
            onChangeText={setName}
          />

          <InputTitle>Descrição</InputTitle>

          <InputDescription
            placeholder='Ex: Sanduíche de pão integral com atum e salada de alface e tomate.'
            value={description}
            multiline
            onChangeText={setDescription}
          />

          <DateTimeInputContainer>
            <InputMaskContainer>
              <DateTime>Data</DateTime>

              <DateTimeInput
                placeholder='DD/MM/YYYY'
                value={date}
                onChangeText={setDate}
                type='datetime'
                options={{
                  format: 'DD/MM/YYYY',
                }}
              />
            </InputMaskContainer>
            <InputMaskContainer>
              <DateTime>Hora</DateTime>

              <DateTimeInput
                placeholder='00:00'
                value={hour}
                onChangeText={setHour}
                type='datetime'
                options={{
                  format: 'HH:mm',
                }}
              />
            </InputMaskContainer>
          </DateTimeInputContainer>
          <Question>Está dentro da dieta?</Question>
          <MealsTypeButtonContainer>
            <HealthyMealButton
              onPress={() => setHealthy(true)}
              mealType={healthy}
              type='SECONDARY'
              title='SIM'
              before={<MealsType mealType />}
            />
            <OffDietButton
              type='SECONDARY'
              mealType={healthy}
              onPress={() => setHealthy(false)}
              title='NÃO'
              before={<MealsType mealType={false} />}
            />
          </MealsTypeButtonContainer>
        </ScrollView>

        <Button
          style={{ marginBottom: 10 }}
          onPress={handleRegisterMeal}
          title={params?.meal ? 'Salvar alterações' : 'Cadastrar refeição'}
        />
      </RegisterMealContainer>
    </Container>
  );
}
