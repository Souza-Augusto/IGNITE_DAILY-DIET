import { BackIconContainer, BackIcon } from './styles';
import { useBackButtonViewModel } from './view-model';

interface props {
  color?: string;
}

export function BackButton({ color }: props) {
  const { handleGoBack } = useBackButtonViewModel();

  return (
    <BackIconContainer onPress={handleGoBack}>
      <BackIcon name='arrowleft' color={color} />
    </BackIconContainer>
  );
}
