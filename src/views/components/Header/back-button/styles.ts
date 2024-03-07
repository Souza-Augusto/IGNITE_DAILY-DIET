import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const BackIconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const BackIcon = styled(AntDesign).attrs({
  size: 30,
})``;
