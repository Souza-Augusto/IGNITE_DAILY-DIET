import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type mealStatus = 'ONDIET' | 'OUTDIET';

type Props = {
  status: mealStatus;
};

export const Container = styled(TouchableOpacity)`
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-width: 1px;
  padding: 15px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 24px;
  margin-left: 24px;
`;
export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Delimiter = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  height: 20px;
  width: 1px;
  margin-left: 12px;
  margin-right: 12px;
`;
export const Meal = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const MealTypeStatus = styled.View<Props>`
  background-color: ${({ theme, status }) =>
    status === 'ONDIET' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  height: 14px;
  width: 14px;
  border-radius: 7px;
`;
