import { useRoute } from '@react-navigation/native';
import { mealDTO } from 'src/dtos/mealDTO';
import { CountHealthyMeals } from '@utils/meals/countHealthyMeals';
import { CountMeals } from '@utils/meals/countMeals';
import { CountOffDietMeals } from '@utils/meals/countOffDietMeals';
import { useState } from 'react';
import { useTheme } from 'styled-components';

type sectionListDataProps = {
  title: string;
  data: mealDTO[];
};

type RouteParams = {
  meals: sectionListDataProps[];
};

interface StatistcsProps {
  mealsMade: number;
  mealsOnDiet: number;
  mealsOffDiet: number;
  bestSequence: number;
  percentage: string;
  calculateStatistcs: () => void;
  chooseBackButtonColor: () => void;
  backButtonColor: string;
  backgroundColor: string;
}

function useStatiticsViewModel(): StatistcsProps {
  const [mealsMade, setMealsMade] = useState(0);
  const [mealsOnDiet, setMealsOnDiet] = useState(0);
  const [mealsOffDiet, setMealsOffDiet] = useState(0);
  const [bestSequence, setBestSequence] = useState(0);
  const [percentage, setPercentage] = useState('');
  const [backButtonColor, setBackButtonColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const { COLORS } = useTheme();

  function chooseBackButtonColor() {
    if (CountOffDietMeals(meals) > CountHealthyMeals(meals)) {
      setBackButtonColor(COLORS.RED_DARK);
      setBackgroundColor(COLORS.RED_LIGHT);
    } else if (CountOffDietMeals(meals) < CountHealthyMeals(meals)) {
      setBackButtonColor(COLORS.GREEN_DARK);
      setBackgroundColor(COLORS.GREEN_LIGHT);
    } else {
      setBackButtonColor(COLORS.GRAY_200);
      setBackgroundColor(COLORS.GRAY_600);
    }
  }

  const route = useRoute();
  const { meals } = route.params as RouteParams;

  function findLongestSequence(data: mealDTO[]): number {
    let maxSequence = 0;
    let currentSequence = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].healthy === true) {
        currentSequence++;
        if (currentSequence > maxSequence) {
          maxSequence = currentSequence;
        }
      } else {
        currentSequence = 0;
      }
    }

    return maxSequence;
  }

  function mergeData() {
    const mergedArray = [] as mealDTO[];

    meals.forEach((item) => {
      item.data.forEach((dataItem) => {
        mergedArray.push(dataItem);
      });
    });
    setBestSequence(findLongestSequence(mergedArray));
  }

  function calculateStatistcs() {
    chooseBackButtonColor();

    mergeData();

    if (CountMeals(meals) === 0) {
      setPercentage('0,00%');
    } else {
      const formatResult = String(
        `${((CountHealthyMeals(meals) / CountMeals(meals)) * 100)
          .toFixed(2)
          .replace('.', ',')}${'%'}`
      );

      setPercentage(formatResult);
    }

    setMealsMade(CountMeals(meals));

    setMealsOffDiet(CountOffDietMeals(meals));

    setMealsOnDiet(CountHealthyMeals(meals));
  }

  return {
    calculateStatistcs,
    bestSequence,
    mealsMade,
    mealsOffDiet,
    mealsOnDiet,
    percentage,
    chooseBackButtonColor,
    backButtonColor,
    backgroundColor,
  };
}

export { useStatiticsViewModel };
