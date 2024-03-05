import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home/view';
import { RegisterMeal } from '@screens/register-meal/view';
import { Statistics } from '@screens/Statistcs';
import { MealDetails } from '@screens/MealDetails/view';
import { mealDTO } from 'src/dtos/mealDTO';
import { StatusNoticed } from '@screens/status-noticed/view';

type routes = {
  home: undefined;
  statistics: undefined;
  registerMeal?: mealDTO;
  mealDetails: mealDTO;
  'status-noticed': { healthy: boolean };
};

const { Navigator, Screen } = createNativeStackNavigator<routes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='statistics' component={Statistics} />
      <Screen name='registerMeal' component={RegisterMeal} />
      <Screen name='mealDetails' component={MealDetails} />
      <Screen name='status-noticed' component={StatusNoticed} />
    </Navigator>
  );
}
