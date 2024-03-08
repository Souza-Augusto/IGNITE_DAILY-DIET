import { useCallback } from 'react';
import { Header } from '@components/header';
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
  Logo,
  Profile,
} from './styles';

import { SectionList } from 'react-native';

import { Button } from '@components/button/view';
import { MealCard } from '@components/meal-card/view';
import { Loading } from '@components/loading/view';

import { useFocusEffect } from '@react-navigation/native';

import { ListEmpty } from '@components/list-empty/view';

import { useHomeViewModel } from './view-model';
import { Dialog } from '@components/dialog/view';

export function Home() {
  const {
    data,
    fetchMeals,
    loading,
    dialogTitle,
    dialogVisible,
    setDialogTitle,
    setDialogVisible,
    setLoading,
    handleNavigateMealDetails,
    handleNavigateResgisterMeal,
    handleNavigateStatistcs,
    arrowIcon,
    cardColor,
    percentage,
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
      <Header.Root
        leftElement={<Logo source={require('@assets/images/png/Logo.png')} />}
        rightElement={
          <Profile source={require('@assets/images/png/Ellipse.png')} />
        }
      />
      <Card
        color={cardColor}
        activeOpacity={0.5}
        onPress={handleNavigateStatistcs}
      >
        <ArrowUpRightIcon name='arrow-up-right' size={25} color={arrowIcon} />
        <CardTitle>{percentage}</CardTitle>
        <CardDescription>das refeições dentro da sua dieta</CardDescription>
      </Card>
      <Title>Refeições</Title>
      <Button
        onPress={handleNavigateResgisterMeal}
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
          <MealCard
            onPress={() => handleNavigateMealDetails(item)}
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
