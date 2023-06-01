import { useState } from 'react';
import { TouchableOpacity, Modal } from 'react-native';
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
  ModalContainer,
  ModalTitle,
  Noticed,
  FeaturedNoticed,
  Image,
  ConfirmRegister,
} from './styles';
import ArrowLeft from '@assets/images/svg/ArrowLeftBlack.svg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';

export function RegisterMeal() {
  const [onDiet, setOndiet] = useState('');
  const [outDiet, setOutDiet] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const { goBack, navigate } = useNavigation();

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
            mealType={onDiet}
            type='SECONDARY'
            title='SIM'
            before={<MealsType mealType='INDIET' />}
          />
          <MealsTypeButton
            type='SECONDARY'
            mealType={outDiet}
            onPress={() => selectedMealType('OUTDIET')}
            title='NÃO'
            before={<MealsType mealType='' />}
          ></MealsTypeButton>
        </MealsTypeButtonContainer>
        <ButtonContainer>
          <Button
            onPress={() => setModalVisible(true)}
            title='Cadastrar refeição'
          />
        </ButtonContainer>
      </RegisterMealContainer>
    </Container>
  );
}
