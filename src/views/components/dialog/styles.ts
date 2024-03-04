import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const DialogContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
`;

export const TitleAndButtonContainer = styled.View`
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

export const ConfirmButton = styled.TouchableOpacity`
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

export const TranparentButton = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
`;
