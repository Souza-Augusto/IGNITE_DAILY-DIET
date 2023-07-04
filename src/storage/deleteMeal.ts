import { GetMeals } from './getMeals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from './storageConfig';
import { mealDTO } from 'src/dtos/mealDTO';

export async function DeleteMeal(mealToDelete: mealDTO) {
  try {
    let storageGroups = await GetMeals();

    const updatedData = storageGroups.filter(
      (meal) => meal.id !== mealToDelete.id
    );

    storageGroups = updatedData;

    const storage = JSON.stringify(storageGroups);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
