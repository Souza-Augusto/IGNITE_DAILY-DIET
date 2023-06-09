import { useState } from 'react';
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
  MealsTypeButton,
  MealsType,
  ModalContainer,
  ModalTitle,
  Noticed,
  FeaturedNoticed,
  Image,
  ConfirmRegister,
  DateTimeInput,
  ErrorMessage,
} from './styles';
import ArrowLeft from '@assets/images/svg/ArrowLeftBlack.svg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ScrollView } from 'react-native';
import { mealDTO } from 'src/dtos/mealDTO';
import { MealCreate } from '@storage/mealCreate';
import { mealGetAll } from '@storage/mealGetAll';

type FormDataProps = {
  name: string;
  description: string;
  date: string;
  hour: string;
};

const registerMealSchema = yup.object({
  name: yup.string().required('Informe o nome da refeição.'),
  description: yup.string().required('Informe a descrição da refeição.'),
  date: yup
    .string()
    .required('Campo obrigatório')
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Formato de data inválido')
    .test('valid-date', 'Data inválida', (value) => {
      if (!value) {
      }

      const [day, month, year] = value.split('/');

      const parsedDay = parseInt(day, 10);
      const parsedMonth = parseInt(month, 10);
      const parsedYear = parseInt(year, 10);

      if (
        parsedDay < 1 ||
        parsedDay > 31 ||
        parsedMonth < 1 ||
        parsedMonth > 12 ||
        parsedYear < 2023
      ) {
        return false;
      }

      return true;
    }),
  hour: yup
    .string()
    .required('Campo obrigatório')
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Formato de hora inválido'),
});

export function RegisterMeal() {
  const [onDiet, setOndiet] = useState('');
  const [outDiet, setOutDiet] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [storageMeals, setStorageMeals] = useState<mealDTO[]>([]);

  const { goBack, navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(registerMealSchema),
  });

  function selectedMealType(type: string) {
    if (type === 'ONDIET') {
      setOndiet(type);
      setOutDiet('');
      return;
    }
    setOutDiet(type);
    setOndiet('');
  }

  async function handleOnOpenModal({
    name,
    description,
    date,
    hour,
  }: FormDataProps) {
    if (onDiet === '' && outDiet === '') {
      return Alert.alert(
        'Por favor informe se a refeição que você deseja está dentro da dieta.'
      );
    }

    await MealCreate({
      title: date,
      data: [{ hour, name, type: onDiet ?? outDiet, description }],
    });
    setModalVisible(true);
  }

  return (
    <Container>
      <Modal visible={modalVisible}>
        <ModalContainer>
          <ModalTitle mealType={onDiet}>
            {onDiet ? 'Continue assim!' : 'Que pena!'}
          </ModalTitle>
          <Noticed>
            {onDiet ? (
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
              onDiet
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
          <Controller
            control={control}
            name='name'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Ex: Saduíche'
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
          <InputTitle>Descrição</InputTitle>

          <Controller
            control={control}
            name='description'
            render={({ field: { onChange, value } }) => (
              <InputDescription
                placeholder='Ex: Sanduíche de pão integral com atum e salada de alface e tomate.'
                value={value}
                multiline
                onChangeText={onChange}
              />
            )}
          />
          {errors.description && (
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          )}
          <DateTimeInputContainer>
            <InputMaskContainer>
              <DateTime>Data</DateTime>

              <Controller
                control={control}
                name='date'
                render={({ field: { onChange, value } }) => (
                  <DateTimeInput
                    placeholder='DD/MM/YYYY'
                    value={value}
                    onChangeText={onChange}
                    type='datetime'
                    options={{
                      format: 'DD/MM/YYYY',
                    }}
                  />
                )}
              />
              {errors.date && (
                <ErrorMessage>{errors.date?.message}</ErrorMessage>
              )}
            </InputMaskContainer>
            <InputMaskContainer>
              <DateTime>Hora</DateTime>

              <Controller
                control={control}
                name='hour'
                render={({ field: { onChange, value } }) => (
                  <DateTimeInput
                    placeholder='00:00'
                    value={value}
                    onChangeText={onChange}
                    type='datetime'
                    options={{
                      format: 'HH:mm',
                    }}
                  />
                )}
              />
              {errors.hour && (
                <ErrorMessage>{errors.hour?.message}</ErrorMessage>
              )}
            </InputMaskContainer>
          </DateTimeInputContainer>
          <Question>Está dentro da dieta?</Question>
          <MealsTypeButtonContainer>
            <MealsTypeButton
              onPress={() => selectedMealType('ONDIET')}
              mealType={onDiet}
              type='SECONDARY'
              title='SIM'
              before={<MealsType mealType='ONDIET' />}
            />
            <MealsTypeButton
              type='SECONDARY'
              mealType={outDiet}
              onPress={() => selectedMealType('OUTDIET')}
              title='NÃO'
              before={<MealsType mealType='' />}
            ></MealsTypeButton>
          </MealsTypeButtonContainer>
        </ScrollView>

        <Button
          style={{ marginBottom: 10 }}
          onPress={handleSubmit(handleOnOpenModal)}
          title='Cadastrar refeição'
        />
      </RegisterMealContainer>
    </Container>
  );
}
