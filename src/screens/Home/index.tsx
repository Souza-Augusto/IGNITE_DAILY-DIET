import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Home(props: any) {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('exemple')}
      style={styles.container}
    >
      <Text>Open up App.js to start working on your app!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
