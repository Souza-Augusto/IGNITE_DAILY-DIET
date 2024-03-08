import { TouchableOpacityProps } from 'react-native';
import { Container, Delimiter, Hour, Meal, MealTypeStatus } from './styles';

type Props = TouchableOpacityProps & {
  hour: string;
  meal: string;
  healthy: boolean;
};

export function MealCard({ hour, meal, healthy, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Delimiter />
      <Meal numberOfLines={1}>{meal}</Meal>
      <MealTypeStatus healthy={healthy} />
    </Container>
  );
}
