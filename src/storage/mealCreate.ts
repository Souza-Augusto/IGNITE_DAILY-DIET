import { mealDTO } from 'src/dtos/mealDTO';
import { mealGetAll } from './mealGetAll';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from './storageConfig';

export async function MealCreate(meals: mealDTO) {
  try {
    const storageGroups = await mealGetAll();

    const existingDateIndex = storageGroups.findIndex(
      (item) => item.title === meals.title
    );

    if (existingDateIndex !== -1) {
      const existingDate = storageGroups[existingDateIndex];
      existingDate.data.push(...meals.data);

      const updatedStorageGroups = [
        ...storageGroups.slice(0, existingDateIndex),
        existingDate,
        ...storageGroups.slice(existingDateIndex + 1),
      ];

      const storage = JSON.stringify(updatedStorageGroups);
      await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    } else {
      storageGroups.push(meals);
      const storage = JSON.stringify(storageGroups);
      await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    }
  } catch (error) {
    throw error;
  }
}
