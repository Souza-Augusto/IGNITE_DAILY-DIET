import { mealGetAll } from './mealGetAll';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from './storageConfig';
import { mealDetailsParams } from 'src/@types/navigate';

export async function DeleteMeal(mealToDelete: mealDetailsParams) {
  try {
    const storageGroups = await mealGetAll();

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
      const refreshStorage = await AsyncStorage.setItem(
        MEALS_COLLECTION,
        storage
      );
      return await mealGetAll();
    }
  } catch (error) {
    throw error;
  }
}
