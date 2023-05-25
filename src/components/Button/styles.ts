import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};
  border-radius: 6px;
  border-width: ${({ type }) => type === 'SECONDARY' && 1}px;
  border-color: ${({ theme, type }) =>
    type === 'SECONDARY' && theme.COLORS.GRAY_100};
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.M}px;
    margin-left: 10px;
  `}
`;
