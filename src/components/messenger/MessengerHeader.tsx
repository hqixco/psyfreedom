import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

export function MessengerHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мессенджер</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '700',
    color: colors.primaryDark,
  },
});
