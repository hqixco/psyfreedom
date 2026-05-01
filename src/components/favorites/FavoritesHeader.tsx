import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

export function FavoritesHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мое избранное</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    color: colors.primaryDark,
  },
});
