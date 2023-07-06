import { mealDTO } from 'src/dtos/mealDTO';

type Props = {
  title: string;
  data: mealDTO[];
}[];

export function CountHealthyMeals(data: Props) {
  try {
    let count = 0;

    data.forEach((group) => {
      group.data.forEach((meal) => {
        if (meal.healthy) {
          count++;
        }
      });
    });

    return count;
  } catch (error) {
    throw error;
  }
}
