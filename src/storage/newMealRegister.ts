import { mealDTO } from 'src/dtos/mealDTO';
import { GetMeals } from './getMeals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from './storageConfig';

type props = {
  title: string;
  data: mealDTO[];
};

export async function NewMealRegister(meals: props) {
  try {
    const storageGroups = await GetMeals();

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
