import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type EmptyFavoritesStateProps = {
  onOpenCatalog: () => void;
};

export function EmptyFavoritesState({ onOpenCatalog }: EmptyFavoritesStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>У вас пока нет сохраненных{'\n'}услуг и товаров</Text>
      <Text style={styles.description}>
        Нажимайте на ♡ и добавляйте{'\n'}понравившиеся услуги и товары{'\n'}в подборки, чтобы не
        потерять
      </Text>

      <Pressable style={styles.button} onPress={onOpenCatalog}>
        <Text style={styles.buttonText}>Перейти в каталог</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 120,
  },
  title: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    color: colors.primaryDark,
    textAlign: 'center',
  },
  description: {
    marginTop: 18,
    fontSize: 15,
    lineHeight: 21,
    color: colors.muted,
    textAlign: 'center',
  },
  button: {
    marginTop: 32,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    paddingHorizontal: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
});
