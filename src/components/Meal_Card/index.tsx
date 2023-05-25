import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Delimiter,
  Hour,
  Meal,
  MealTypeStatus,
  mealStatus,
} from './styles';

type Props = TouchableOpacityProps & {
  hour: string;
  meal: string;
  status: mealStatus;
};

export function Meal_Card({ hour, meal, status = 'ONDIET', ...rest }: Props) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Delimiter />
      <Meal numberOfLines={1}>{meal}</Meal>
      <MealTypeStatus status={status} />
    </Container>
  );
}
