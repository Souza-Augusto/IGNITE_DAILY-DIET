import { useNavigation } from '@react-navigation/native';
import { NewMealRegister } from '@storage/new-meal-register';
import { useState } from 'react';

export interface RegisterMealProps {
  healthy: boolean;
  setHealthy: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  hour: string;
  setHour: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  dialogVisible: boolean;
  setDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
  dialogMessage: string;
  handleRegisterMeal: () => void;
}

function useRegisterMealViewModel(): RegisterMealProps {
  const [healthy, setHealthy] = useState<boolean | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const currentDate = new Date();

  const { navigate } = useNavigation();

  async function handleRegisterMeal() {
    try {
      if (
        name.trim().length <= 0 ||
        description.trim().length <= 0 ||
        date.trim().length <= 0 ||
        hour.trim().length <= 0
      ) {
        setDialogMessage('Preencha todos os campos.');
        setDialogVisible(true);
        return;
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
        setDialogMessage('Formato de data inválido.');
        setDialogVisible(true);
        return;
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
        setDialogMessage('Hora inválida.');
        setDialogVisible(true);
        return;
      }
      if (healthy === null) {
        setDialogMessage(
          'Por favor informe se a refeição que você deseja está dentro da dieta.'
        );
        setDialogVisible(true);
        return;
      }
      setIsLoading(true);

      await NewMealRegister({
        id: String(currentDate.getTime()),
        hour,
        date,
        name,
        healthy: healthy as boolean,
        description,
        createdAt: String(currentDate),
        updatedAt: '',
      });
      setIsLoading(false);
      navigate('status-noticed', { healthy: healthy as boolean });
    } catch (error) {
      console.log(error);
      setDialogMessage(`Não foi possível Cadastrar a refeição`);
      setDialogVisible(true);
    }
  }

  return {
    date,
    description,
    dialogMessage,
    dialogVisible,
    setDialogVisible,
    healthy: healthy as boolean,
    hour,
    isLoading,
    name,
    setDate,
    setDescription,
    setHealthy: setHealthy as React.Dispatch<React.SetStateAction<boolean>>,
    setHour,
    setName,
    handleRegisterMeal,
  };
}

export { useRegisterMealViewModel };
