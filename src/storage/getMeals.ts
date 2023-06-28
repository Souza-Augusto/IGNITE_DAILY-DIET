import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from './storageConfig';
import { mealDTO } from 'src/dtos/mealDTO';

type props = {
  title: string;
  data: mealDTO[];
};

export async function GetMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const groups: props[] = storage ? JSON.parse(storage) : ([] as props[]);
    return groups;
  } catch (error) {
    throw error;
  }
}
