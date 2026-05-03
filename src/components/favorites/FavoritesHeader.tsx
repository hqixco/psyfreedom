import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

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
    fontSize: 24,
    lineHeight: 34,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
});
