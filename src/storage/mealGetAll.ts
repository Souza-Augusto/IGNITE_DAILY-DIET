import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from './storageConfig';
import { mealDTO } from 'src/dtos/mealDTO';

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const groups: mealDTO[] = storage ? JSON.parse(storage) : ([] as mealDTO[]);
    return groups;
  } catch (error) {
    throw error;
  }
}
