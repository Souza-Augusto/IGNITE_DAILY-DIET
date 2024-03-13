import { mealDTO } from '@dtos/meal-dto';

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
      'meal-update'?: { meal: mealDTO };
    }
  }
}
