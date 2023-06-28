import { GetMeals } from './getMeals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from './storageConfig';
import { mealDTO } from 'src/dtos/mealDTO';

export async function DeleteMeal(mealToDelete: mealDTO) {
  try {
    const storageGroups = await GetMeals();

    const existingDateIndex = storageGroups.findIndex(
      (item) => item.title === mealToDelete.date
    );

    if (existingDateIndex !== -1) {
      const existingDate = storageGroups[existingDateIndex];

      const updatedData = existingDate.data.filter(
        (meal) => meal.id !== mealToDelete.id
      );

      if (updatedData.length > 0) {
        existingDate.data = updatedData;
      } else {
        storageGroups.splice(existingDateIndex, 1);
      }

      const storage = JSON.stringify(storageGroups);
      await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    }
  } catch (error) {
    throw error;
  }
}
