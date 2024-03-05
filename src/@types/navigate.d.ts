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
      'register-meal'?: { meal?: mealDTO };
      'meal-details': { meal: mealDTO };
      'status-noticed': { healthy: boolean };
    }
  }
}
