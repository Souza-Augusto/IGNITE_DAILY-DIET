import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '@components/Input';
import { Button as TouchableOpacity } from '@components/Button';
import { TextInputProps } from 'react-native';

type MealTypeProps = {
  mealType: 'INDIET' | 'OUTDIET';
};
type ButtonProps = {
  selectedType: string;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding-top: 24px;
`;
export const Header = styled.View`
  padding-left: 24px;
  flex-direction: row;
  align-items: center;
`;

export const TitleContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-left: 25%;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.L}px;
  `}
`;

export const RegisterMealContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  shadow-color: ${({ theme }) => theme.COLORS.GRAY_200};
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 4;
  margin-top: 24px;
  padding-top: 16px;
`;

export const InputTitle = styled.Text`
  ${({ theme }) => css`
    margin-top: 24px;
    margin-left: 24px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
  `}
`;

export const InputDescription = styled(Input)<TextInputProps>`
  min-height: 120px;
  max-height: 120px;
`;
export const DateTimeInputContainer = styled.View`
  flex-direction: row;
  margin: 14px;
`;
export const InputMaskContainer = styled.View`
  flex: 1;
`;
export const DateTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
    margin-left: 10px;
  `}
`;

export const InputMask = styled(Input)<TextInputProps>`
  margin-left: 10px;
  margin-right: 10px;
`;
export const Question = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
    margin-left: 24px;
    margin-top: 10px;
  `}
`;
export const MealsTypeButtonContainer = styled.View`
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
`;
export const MealsTypeButton = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  margin: 8px;
  border: ${({ selectedType }) => (selectedType ? 1 : 0)}px;
  border-color: ${({ theme, selectedType }) => {
    if (selectedType === 'INDIET') {
      return theme.COLORS.GREEN_DARK;
    }
    if (selectedType === 'OUTDIET') {
      return theme.COLORS.RED_DARK;
    } else {
      return null;
    }
  }};
  background-color: ${({ theme, selectedType }) => {
    if (selectedType === 'INDIET') {
      return theme.COLORS.GREEN_LIGHT;
    }
    if (selectedType === 'OUTDIET') {
      return theme.COLORS.RED_LIGHT;
    } else {
      return theme.COLORS.GRAY_600;
    }
  }};
`;
export const MealsType = styled.View<MealTypeProps>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: ${({ theme, mealType }) =>
    mealType === 'INDIET' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 10px;
`;
export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 10px;
`;
