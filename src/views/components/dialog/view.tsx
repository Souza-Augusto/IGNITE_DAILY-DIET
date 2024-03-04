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
  TranparentButton,
} from './styles';

export interface Props extends ModalProps {
  dialogVisible: boolean;
  dialogMessage: string;
  positiveButtonTitle?: string;
  negativeButtonTitle?: string;
  negativeFunction?: () => void;
  positiveFunction?: () => void;
}

export function Dialog({
  dialogVisible,
  dialogMessage,
  negativeButtonTitle,
  positiveButtonTitle,
  negativeFunction,
  positiveFunction,
  ...rest
}: Props) {
  return (
    <Modal visible={dialogVisible} transparent {...rest}>
      <DialogContainer>
        <TranparentButton onPress={negativeFunction} />
        <TitleAndButtonContainer>
          <DialogTitle>{dialogMessage}</DialogTitle>
          <DialogButtonsContainer>
            {negativeButtonTitle && (
              <CancelButton onPress={negativeFunction}>
                <CancelButtonTitle numberOfLines={1}>
                  {negativeButtonTitle}
                </CancelButtonTitle>
              </CancelButton>
            )}
            {positiveButtonTitle && (
              <ConfirmButton onPress={positiveFunction}>
                <ConfirmButtonTitle>{positiveButtonTitle}</ConfirmButtonTitle>
              </ConfirmButton>
            )}
          </DialogButtonsContainer>
        </TitleAndButtonContainer>
        <TranparentButton onPress={negativeFunction} />
      </DialogContainer>
    </Modal>
  );
}
