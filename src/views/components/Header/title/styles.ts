import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const HeaderTitle = styled.Text.attrs({ numberOfLines: 1 })`
  ${({ theme }) => css`
    margin-left: 25%;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.L}px;
  `}
`;
