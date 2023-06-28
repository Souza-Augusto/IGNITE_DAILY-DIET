import { useCallback, useState } from 'react';
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
import { Button } from '@components/Button';
import { Meal_Card } from '@components/Meal_Card';
import { mealDTO } from 'src/dtos/mealDTO';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { ListEmpty } from '@components/ListEmpty';
import { mealGetAll } from '@storage/mealGetAll';
import AsyncStorage from '@react-native-async-storage/async-storage';

type dateFormattedArrayProps = {
  title: number;
  data: [
    {
      id: string;
      hour: string;
      date: string;
      name: string;
      type: 'OUTDIET' | 'ONDIET';
      description: string;
    }
  ];
};

export function Home() {
  const [data, setData] = useState<mealDTO[]>([]);

  function formatDates(dates: dateFormattedArrayProps[]) {
    const formattedttedDates = dates.map((item) => {
      const parts = String(item.title);
      const year = parts.substring(2, 4);
      const month = parts.substring(4, 6);
      const day = parts.substring(6, 8);

      return {
        ...item,
        title: `${day}.${month}.${year}`,
      };
    });
    setData(formattedttedDates);
  }

  function sortDatesDescending(dates: dateFormattedArrayProps[]) {
    const decendingDates = dates.sort((a, b) => {
      const dateA = a.title;
      const dateB = b.title;
      return dateB - dateA;
    });
    formatDates(decendingDates);
  }

  function convertDates(dates: mealDTO[]) {
    const converttedDates = dates.map((item) => {
      const parts = item.title.split('/');
      const formattedTitle = Number(`${parts[2]}${parts[1]}${parts[0]}`);

      return {
        ...item,
        title: formattedTitle,
      };
    });
    sortDatesDescending(converttedDates);
  }

  async function fetchMeals() {
    try {
      const data = await mealGetAll();
      convertDates(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

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
        contentContainerStyle={data?.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        sections={data}
        keyExtractor={(_, index) => index.toString()}
        renderSectionHeader={({ section: { title } }) => (
          <DateContainer>
            <Date>{title}</Date>
          </DateContainer>
        )}
        renderItem={({ item }) => (
          <Meal_Card
            onPress={() =>
              navigation.navigate('mealDetails', {
                meal: item,
              })
            }
            hour={item.hour}
            meal={item.name}
            type={item.type}
          />
        )}
        ListEmptyComponent={
          <ListEmpty message='Sua lista de refeições está vazia, que tal cadastrar uma nova refeição?' />
        }
      />
    </Container>
  );
}
