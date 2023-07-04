import { useEffect, useState } from 'react';
import { TouchableOpacity, Modal, Alert } from 'react-native';
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
  ModalContainer,
  ModalTitle,
  Noticed,
  FeaturedNoticed,
  Image,
  ConfirmRegister,
  DateTimeInput,
  OffDietButton,
  HealthyMealButton,
} from './styles';
import ArrowLeft from '@assets/images/svg/ArrowLeftBlack.svg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ScrollView } from 'react-native';
import { NewMealRegister } from '@storage/newMealRegister';
import { DeleteMeal } from '@storage/deleteMeal';
import { mealDTO } from 'src/dtos/mealDTO';
import { updateMeal } from '@storage/updateMeal';

type RouteParams = {
  meal: mealDTO;
};

export function RegisterMeal() {
  const [healthy, setHealthy] = useState<boolean | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  const currentDate = new Date();

  const { goBack, navigate } = useNavigation();

  const route = useRoute();
  const params = route.params as RouteParams;

  async function handleOnOpenModal() {
    if (
      name.trim().length <= 0 ||
      description.trim().length <= 0 ||
      date.trim().length <= 0 ||
      hour.trim().length <= 0
    ) {
      return Alert.alert('Preencha todos os campos.');
    }

    const [day, month, year] = date.split('/');

    const parsedDay = parseInt(day, 10);
    const parsedMonth = parseInt(month, 10);
    const parsedYear = parseInt(year, 10);

    if (
      date.length < 10 ||
      parsedDay < 1 ||
      parsedDay > 31 ||
      parsedMonth < 1 ||
      parsedMonth > 12 ||
      parsedYear < 2023
    ) {
      return Alert.alert('Formato de data inválido.');
    }

    const [hours, minutes] = hour.split(':');
    const parsedHours = parseInt(hours, 10);
    const parsedMinutes = parseInt(minutes, 10);

    if (
      hour.length < 5 ||
      parsedHours < 0 ||
      parsedHours > 23 ||
      parsedMinutes < 0 ||
      parsedMinutes > 59
    ) {
      return Alert.alert('Hora inválida.');
    }

    if (healthy === null) {
      return Alert.alert(
        'Por favor informe se a refeição que você deseja está dentro da dieta.'
      );
    }

    if (params?.meal) {
      await updateMeal({
        id: params.meal.id,
        hour,
        date,
        name,
        healthy,
        description,
        createdAt: params.meal.createdAt,
        updatedAt: String(currentDate),
      });

      setModalVisible(true);
      return;
    }

    await NewMealRegister({
      id: String(currentDate.getTime()),
      hour,
      date,
      name,
      healthy,
      description,
      createdAt: String(currentDate),
      updatedAt: '',
    });
    setModalVisible(true);
  }

  useEffect(() => {
    if (params?.meal) {
      setName(params.meal.name);
      setDescription(params.meal.description);
      setDate(params.meal.date);
      setHour(params.meal.hour);
      setHealthy(params.meal.healthy);
    }
  }, []);

  return (
    <Container>
      <Modal visible={modalVisible}>
        <ModalContainer>
          <ModalTitle mealType={healthy}>
            {healthy ? 'Continue assim!' : 'Que pena!'}
          </ModalTitle>
          <Noticed>
            {healthy ? (
              <>
                Você continua{' '}
                <FeaturedNoticed>dentro da dieta.</FeaturedNoticed> Muito bem!
              </>
            ) : (
              <>
                Você <FeaturedNoticed>saiu da dieta</FeaturedNoticed> dessa vez,
                mas continue se esforçando e não desista!
              </>
            )}
          </Noticed>
          <Image
            source={
              healthy
                ? require('@assets/images/png/Illustration(1).png')
                : require('@assets/images/png/Illustration(2).png')
            }
          />
          <ConfirmRegister
            onPress={() => navigate('home')}
            title='Ir para a tela inicial'
          />
        </ModalContainer>
      </Modal>
      <Header>
        <TouchableOpacity onPress={() => goBack()}>
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
          onPress={handleOnOpenModal}
          title={params?.meal ? 'Salvar alterações' : 'Cadastrar refeição'}
        />
      </RegisterMealContainer>
    </Container>
  );
}
