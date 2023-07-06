import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
import { Button as TouchableComponent } from '@components/Button';
import Pencil from '@assets/images/svg/Simple.svg';
import Trash from '@assets/images/svg/Trash.svg';
import { TouchableOpacity } from 'react-native';

type Props = {
  mealType: boolean;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, mealType }) =>
    mealType === true ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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
    margin-left: 30%;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.L}px;
  `}
`;
export const DetaisMealContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  shadow-color: ${({ theme }) => theme.COLORS.GRAY_200};
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 4;
  margin-top: 24px;
  padding: 24px;
  padding-top: 40px;
`;

export const Meal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.L}px;
  `}
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    margin-top: 8px;
    margin-bottom: 24px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.M}px;
  `}
`;
export const DateTimeTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XS}px;
    margin-bottom: 8px;
  `}
`;
export const DateTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.M}px;
    margin-bottom: 24px;
  `}
`;
export const MealTypeContainer = styled.View`
  width: 150px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 16px;
  border-radius: 77px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const MealType = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, mealType }) =>
    mealType ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
export const MealTypeDescription = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.S}px;
    margin-left: 8px;
  `}
`;
export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
export const Button = styled(TouchableComponent)`
  margin-top: 8px;
  width: 100%;
`;
export const PencilIcon = styled(Pencil).attrs(() => ({
  marginRight: 10,
  width: 25,
  height: 25,
}))``;
export const TrashIcon = styled(Trash).attrs(() => ({
  marginRight: 10,
  width: 25,
  height: 25,
}))``;
export const DialogContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Dialog = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 40px;
  padding-bottom: 24px;
`;

export const DialogTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.L}px;
  text-align: center;
  margin-bottom: 36px;
`;

export const DialogButtonsContainer = styled.View`
  flex-direction: row;
`;

export const CancelButton = styled(TouchableOpacity)`
  height: 50px;
  width: 50%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-width: 1px;
  border-radius: 6px;
  margin-right: 6px;
`;

export const CancelButtonTitle = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.S}px;
    align-self: center;
    margin-top: 16px;
    margin-bottom: 16px;
  `}
`;

export const ConfirmButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  height: 50px;
  width: 50%;
  border-width: 1px;
  border-radius: 6px;
  margin-left: 6px;
`;
export const ConfirmButtonTitle = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.S}px;
    align-self: center;
    margin-top: 16px;
    margin-bottom: 16px;
  `}
`;
