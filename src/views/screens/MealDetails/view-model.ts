import { useState, Dispatch } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { mealDTO } from 'src/dtos/mealDTO';
import { DeleteMeal } from '@storage/deleteMeal';

type RouteParams = {
  meal: mealDTO;
};

interface MealDetailsProps {
  handleGoBack: () => void;
  dialogVisible: boolean;
  dialogMessage: string;
  meal: mealDTO;
  alert: () => void;
  deleteMeal: () => void;
  setDialogVisible: Dispatch<React.SetStateAction<boolean>>;
  handleNavigationRegisterMeal: () => void;
}

function useMealDetailsViewModel(): MealDetailsProps {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  function alert() {
    setDialogMessage(' Deseja realmente excluir o registro da refeição?');
    setDialogVisible(true);
  }

  async function deleteMeal() {
    setDialogVisible(false);
    try {
      await DeleteMeal(meal);
      navigation.navigate('home');
    } catch (error) {
      console.log(error);
      setDialogMessage('Não foi possível excluir a refeição.');
      setDialogVisible(true);
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleNavigationRegisterMeal() {
    navigation.navigate('registerMeal', { meal });
  }

  return {
    alert,
    deleteMeal,
    dialogVisible,
    meal,
    handleGoBack,
    dialogMessage,
    setDialogVisible,
    handleNavigationRegisterMeal,
  };
}

export { useMealDetailsViewModel };
