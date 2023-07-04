import { mealDTO } from 'src/dtos/mealDTO';
import { GetMeals } from './getMeals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from './storageConfig';

export async function NewMealRegister(meal: mealDTO) {
  try {
    const storageGroups = await GetMeals();

    storageGroups.push(meal);

    const storage = JSON.stringify(storageGroups);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
