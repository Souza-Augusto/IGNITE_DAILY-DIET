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
} from './styles';

import { SectionList } from 'react-native';

import ArrowUpRight from '@assets/images/svg/Plus.svg';
import { Button } from '@components/Button';
import { Meal_Card } from '@components/Meal_Card';
import { mealDTO } from 'src/dtos/mealDTO';

export function Home(props: any) {
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

  return (
    <Container>
      <Header />
      <Card>
        <ArrowUpRightIcon />
        <CardTitle>90,86%</CardTitle>
        <CardDescription>das refeições dentro da sua dieta</CardDescription>
      </Card>
      <Title>Refeições</Title>
      <Button
        style={{ marginBottom: 32 }}
        title='Nova refeição'
        before={<ArrowUpRight />}
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
