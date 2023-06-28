import { mealDTO } from 'src/dtos/mealDTO';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      registerMeal?: { meal?: mealDTO };
      mealDetails: { meal: mealDTO };
    }
  }
}
