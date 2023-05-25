import { mealStatus } from '@components/Meal_Card/styles';

export type mealDTO = {
  title: string;
  data: {
    hour: string;
    meal: string;
    status: mealStatus;
  }[];
};
