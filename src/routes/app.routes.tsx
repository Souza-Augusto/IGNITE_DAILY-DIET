import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { RegisterMeal } from '@screens/RegisterMeal';
import { Statistics } from '@screens/Statistcs';
import { MealDetails } from '@screens/MealDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='statistics' component={Statistics} />
      <Screen name='registerMeal' component={RegisterMeal} />
      <Screen name='mealDetails' component={MealDetails} />
    </Navigator>
  );
}
