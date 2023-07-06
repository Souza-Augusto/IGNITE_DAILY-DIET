import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export type background = 'GREEN' | 'RED';
type CardProps = {
  type?: background;
};

type DietStatusProps = {
  percentege: number;
};

export const Container = styled.View<DietStatusProps>`
  flex: 1;
  background-color: ${({ theme, percentege }) =>
    percentege >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding-top: 24px;
`;

export const BackIconContainer = styled(TouchableOpacity)`
  width: 100%;
  margin-top: 48px;
  padding-left: 24px;
`;

export const BackIcon = styled(AntDesign)<DietStatusProps>`
  color: ${({ theme, percentege }) =>
    percentege >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    align-self: center;
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    align-self: center;
  `}
`;

export const StatisticsContainer = styled.View`
  flex: 1;
  padding-top: 30px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-top: 38px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  shadow-color: ${({ theme }) => theme.COLORS.GRAY_200};
  shadow-opacity: 0.1;
  shadow-offset: {
    width: 0;
  }
  shadow-radius: 4px;
  elevation: 4;
`;
export const StatistcsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    align-self: center;
    margin-bottom: 10px;
  `}
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 24px;
  margin-right: 24px;
  align-items: center;
  justify-content: center;
`;
export const Amount = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
export const CardDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    flex-wrap: wrap;
    text-align: center;
  `}
`;
export const MealsTypeContainer = styled.View`
  flex-direction: row;
  margin-left: 18px;
  margin-right: 18px;
`;
export const MealsTypeCard = styled.View<CardProps>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 6px;
`;
