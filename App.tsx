import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import theme from './src/theme';
import { StatusBar } from 'react-native';
import { Loading } from '@components/Loading/view';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor={'transparent'}
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </>
  );
}
