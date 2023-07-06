import { mealDTO } from 'src/dtos/mealDTO';

type Props = {
  title: string;
  data: mealDTO[];
}[];

export function CountMeals(data: Props) {
  try {
    let count = 0;

    data.forEach((group) => {
      group.data.forEach(() => {
        count++;
      });
    });

    return count;
  } catch (error) {
    throw error;
  }
}
