import { mealDTO } from 'src/dtos/mealDTO';
import { mealGetAll } from './mealGetAll';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from './storageConfig';

export async function MealCreate(meals: mealDTO) {
  try {
    const storageGroups = await mealGetAll();

    const dateAlreadyExists = storageGroups.find(
      (item) => item.title === meals.title
    );

    if (dateAlreadyExists) {
      dateAlreadyExists.data = [...dateAlreadyExists.data, ...meals.data];

      const addMealsArray = storageGroups.filter(
        (item) => item.title !== meals.title
      );

      const storage = JSON.stringify([...addMealsArray, dateAlreadyExists]);

      await AsyncStorage.setItem(MEALS_COLLECTION, storage);
      return;
    }

    const storage = JSON.stringify([...storageGroups, meals]);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
