import { Header } from '@components/Header';
import {
  Card,
  CardDescription,
  CardTitle,
  Container,
  ArrowUpRightIcon,
  Title,
  Date,
  DateContainer,
  PlusIcon,
} from './styles';

import { SectionList } from 'react-native';

import ArrowUpRight from '@assets/images/svg/Plus.svg';
import { Button } from '@components/Button';
import { Meal_Card } from '@components/Meal_Card';
import { mealDTO } from 'src/dtos/mealDTO';

import { useNavigation } from '@react-navigation/native';

export function Home() {
  const DATA = [
    {
      title: '20.03.2023',
      data: [
        { hour: '12.00', meal: 'Apple', status: 'ONDIET' },
        { hour: '12.00', meal: 'Apple', status: 'ONDIET' },
        { hour: '12.00', meal: 'Apple', status: 'ONDIET' },
      ],
    },
    {
      title: '20.03.2023',
      data: [
        { hour: '12.00', meal: 'Apple', status: 'ONDIET' },
        { hour: '12.00', meal: 'Apple', status: 'ONDIET' },
        { hour: '12.00', meal: 'Apple', status: 'ONDIET' },
      ],
    },
  ] as mealDTO[];

  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Card
        activeOpacity={0.5}
        onPress={() => navigation.navigate('statistics')}
      >
        <ArrowUpRightIcon />
        <CardTitle>90,86%</CardTitle>
        <CardDescription>das refeições dentro da sua dieta</CardDescription>
      </Card>
      <Title>Refeições</Title>
      <Button
        onPress={() => navigation.navigate('registerMeal')}
        title='Nova refeição'
        before={<PlusIcon />}
      />
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(_, index) => index.toString()}
        renderSectionHeader={({ section: { title } }) => (
          <DateContainer>
            <Date>{title}</Date>
          </DateContainer>
        )}
        renderItem={({ item }) => (
          <Meal_Card hour={item.hour} meal={item.meal} status={item.status} />
        )}
      />
    </Container>
  );
}
