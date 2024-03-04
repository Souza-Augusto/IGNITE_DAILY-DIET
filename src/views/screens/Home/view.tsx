import { useCallback } from 'react';
import { Header } from '@components/Header/view';
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

import { Button } from '@components/Button/view';
import { Meal_Card } from '@components/Meal_Card/view';
import { Loading } from '@components/Loading/view';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { ListEmpty } from '@components/ListEmpty/view';

import { useHomeViewModel } from './view-model';
import { Dialog } from '@components/dialog/view';

export function Home() {
  const {
    countMeals,
    data,
    fetchMeals,
    healthyMeals,
    loading,
    dialogTitle,
    dialogVisible,
    setDialogTitle,
    setDialogVisible,
    setLoading,
  } = useHomeViewModel();

  useFocusEffect(
    useCallback(() => {
      try {
        fetchMeals();
      } catch (error) {
        setLoading(false);
        setDialogTitle('Não foi possível carregar as refeições.');
        setDialogVisible(true);
      }
    }, [])
  );

  const navigation = useNavigation();
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Dialog
        negativeFunction={() => setDialogVisible(false)}
        dialogVisible={dialogVisible}
        dialogMessage={dialogTitle}
      />
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
