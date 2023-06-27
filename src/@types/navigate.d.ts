import { mealDTO } from 'src/dtos/mealDTO';

export type mealDetailsParams = {
  id: string;
  hour: string;
  date: string;
  name: string;
  type: 'OUTDIET' | 'ONDIET';
  description: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      registerMeal?: { meal?: mealDetailsParams };
      mealDetails: { meal: mealDetailsParams };
    }
  }
}
