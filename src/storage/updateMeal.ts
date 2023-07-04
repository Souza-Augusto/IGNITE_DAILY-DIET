import { mealDTO } from 'src/dtos/mealDTO';
import { GetMeals } from './getMeals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from './storageConfig';

export async function updateMeal(updatedObject: mealDTO) {
  try {
    const storageMeals = await GetMeals();

    const index = storageMeals.findIndex((obj) => obj.id === updatedObject.id);

    if (index !== -1) {
      storageMeals[index] = { ...storageMeals[index], ...updatedObject };

      const storage = JSON.stringify(storageMeals);
      await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    } else {
      console.log('Objeto não encontrado no  com base no ID fornecido.');
    }
  } catch (error) {
    throw error;
  }
}
