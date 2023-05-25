import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowUpRight from '@assets/images/svg/ArrowUpRight.svg';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
`;

export const Card = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  margin-top: 30px;
  align-items: center;
  padding-bottom: 24px;
  margin-bottom: 40px;
`;

export const CardTitle = styled.Text`
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
  `}
`;
export const ArrowUpRightIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  alignSelf: 'flex-end',
  marginRight: 5,
  marginTop: 5,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-bottom: 8px;
  `}
`;
export const DateContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
export const Date = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.L}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 8px;
  `}
`;
