import styled, { css } from 'styled-components/native';

import { TextInputMask } from 'react-native-masked-text';

export const Container = styled(TextInputMask)`
  ${({ theme }) => css`
    padding: 14px;
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY_500};
    border-radius: 6px;
    margin-left: 24px;
    margin-right: 24px;
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
