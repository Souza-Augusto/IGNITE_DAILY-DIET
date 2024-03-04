import { Modal, ModalProps } from 'react-native';
import {
  ConfirmButton,
  DialogContainer,
  TitleAndButtonContainer,
  DialogTitle,
  DialogButtonsContainer,
  CancelButton,
  CancelButtonTitle,
  ConfirmButtonTitle,
} from './styles';

export interface Props extends ModalProps {
  dialogMessage: string;
  positiveButtonTitle?: string;
  negativeButtonTitle?: string;
  negativeFunction?: () => void;
  positiveFunction?: () => void;
}

export function Dialog({
  dialogMessage,
  negativeButtonTitle,
  positiveButtonTitle,
  negativeFunction,
  positiveFunction,
  ...rest
}: Props) {
  return (
    <Modal transparent {...rest}>
      <DialogContainer>
        <TitleAndButtonContainer>
          <DialogTitle>{dialogMessage}</DialogTitle>
          <DialogButtonsContainer>
            {negativeFunction && (
              <CancelButton onPress={negativeFunction}>
                <CancelButtonTitle numberOfLines={1}>
                  {negativeButtonTitle}
                </CancelButtonTitle>
              </CancelButton>
            )}
            {positiveFunction && (
              <ConfirmButton onPress={positiveFunction}>
                <ConfirmButtonTitle>{positiveButtonTitle}</ConfirmButtonTitle>
              </ConfirmButton>
            )}
          </DialogButtonsContainer>
        </TitleAndButtonContainer>
      </DialogContainer>
    </Modal>
  );
}
