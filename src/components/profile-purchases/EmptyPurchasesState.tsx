import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function EmptyPurchasesState({ onGoToCatalog }: { onGoToCatalog: () => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>У вас пока нет покупок</Text>
      <Pressable onPress={onGoToCatalog} style={styles.button}>
        <Text style={styles.buttonText}>В каталог</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 500,
    marginTop: 80,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    ...typography.Inter[700],
    color: colors.primaryDark,
    textAlign: 'center',
  },
  button: {
    marginTop: 32,
    height: 52,
    borderRadius: 26,
    paddingHorizontal: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.white,
  },
});
