import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const DialogContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
`;

export const TitleAndButtonContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  padding: 0px 24px;
`;

export const DialogTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.L}px;
  align-self: center;
  margin: 24px 16px;
`;

export const DialogButtonsContainer = styled.View`
  flex-direction: row;
`;

export const CancelButton = styled(TouchableOpacity)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-width: 1px;
  border-radius: 6px;
  margin-right: 6px;
  margin-bottom: 24px;
`;

export const CancelButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.S}px;
    align-self: center;
    margin: 16px 16px;
  `}
`;

export const ConfirmButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-width: 1px;
  border-radius: 6px;
  margin-left: 6px;
  margin-bottom: 24px;
`;
export const ConfirmButtonTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.S}px;
    align-self: center;
    margin: 16px 16px;
  `}
`;

export const TranparentButton = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
`;
