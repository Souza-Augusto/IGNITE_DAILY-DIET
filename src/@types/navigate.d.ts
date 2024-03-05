import { mealDTO } from 'src/dtos/mealDTO';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        meals: {
          title: string;
          data: mealDTO[];
        }[];
      };
      registerMeal?: { meal?: mealDTO };
      mealDetails: { meal: mealDTO };
      'status-noticed': { healthy: boolean };
    }
  }
}
