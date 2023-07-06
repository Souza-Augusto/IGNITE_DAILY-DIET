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

import { Alert, SectionList } from 'react-native';

import { Button } from '@components/Button';
import { Meal_Card } from '@components/Meal_Card';
import { Loading } from '@components/Loading';

import { mealDTO } from 'src/dtos/mealDTO';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { ListEmpty } from '@components/ListEmpty';
import { GetMeals } from '@storage/getMeals';

import { CountMeals } from '@utils/meals/countMeals';
import { CountHealthyMeals } from '@utils/meals/countHealthyMeals';
import { SeparateByDate } from '@utils/meals/separateByDate';

type dateFormattedArrayProps = {
  title: number;
  data: mealDTO[];
};
type sectionListDataProps = {
  title: string;
  data: mealDTO[];
};

export function Home() {
  const [data, setData] = useState<sectionListDataProps[]>([]);
  const [countMeals, setCountMeals] = useState(0);
  const [healthyMeals, setHealthyMeals] = useState(0);
  const [loading, setLoading] = useState(true);

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
    setCountMeals(CountMeals(formattedttedDates));
    setHealthyMeals(CountHealthyMeals(formattedttedDates));
    setData(formattedttedDates);
  }

  function sortHoursDescending(dates: dateFormattedArrayProps[]) {
    dates.forEach((item) => {
      item.data.sort((a, b) => {
        const hourA = a.hour.split(':');
        const hourB = b.hour.split(':');
        return (
          Number(hourB[0]) - Number(hourA[0]) ||
          Number(hourB[1]) - Number(hourA[1])
        );
      });
    });

    formatDates(dates);
  }

  function sortDatesDescending(dates: dateFormattedArrayProps[]) {
    const formattedDates = dates.sort((a, b) => {
      const dateA = a.title;
      const dateB = b.title;
      return dateB - dateA;
    });

    sortHoursDescending(formattedDates);
  }

  function convertDates(dates: sectionListDataProps[]) {
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
      const meals = await GetMeals();
      convertDates(SeparateByDate(meals));
    } catch (error) {
      console.log(error);
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.');
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  const navigation = useNavigation();
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Header />
      <Card
        percentege={(healthyMeals / countMeals) * 100}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('statistics', { meals: data })}
      >
        <ArrowUpRightIcon
          name='arrow-up-right'
          size={25}
          percentege={(healthyMeals / countMeals) * 100}
        />
        <CardTitle>
          {countMeals === 0
            ? '0,00%'
            : String(
                ((healthyMeals / countMeals) * 100).toFixed(2) + '%'
              ).replace('.', ',')}
        </CardTitle>
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
            healthy={item.healthy}
          />
        )}
        ListEmptyComponent={
          <ListEmpty message='Sua lista de refeições está vazia, que tal cadastrar uma nova refeição?' />
        }
      />
    </Container>
  );
}
