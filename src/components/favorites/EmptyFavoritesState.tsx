import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors, typography } from '../../constants/theme';

type EmptyFavoritesStateProps = {
  onOpenCatalog: () => void;
};

export function EmptyFavoritesState({ onOpenCatalog }: EmptyFavoritesStateProps) {
  const heartXml = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.8135 5.62524C20.2488 5.62524 17.9988 10.1252 17.9988 10.1252C17.9988 10.1252 15.7488 5.62524 11.1841 5.62524C7.47439 5.62524 4.53673 8.72884 4.49877 12.4322C4.42142 20.1195 10.597 25.5863 17.366 30.1805C17.5526 30.3074 17.7731 30.3753 17.9988 30.3753C18.2245 30.3753 18.445 30.3074 18.6316 30.1805C25.3999 25.5863 31.5754 20.1195 31.4988 12.4322C31.4608 8.72884 28.5231 5.62524 24.8135 5.62524Z" stroke="${colors.primary}" stroke-width="0.609939" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  return (
    <View style={styles.container}>
      <SvgXml xml={heartXml} width={35} height={35} />
      <Text style={styles.title}>У вас пока нет сохраненных{'\n'}услуг и товаров</Text>
      <Text style={styles.description}>
        Нажимайте на ♡ и добавляйте{'\n'}понравившиеся услуги и товары{'\n'}в подборки, чтобы не потерять
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
    fontSize: 16,
    lineHeight: 20,
    marginTop: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
    textAlign: 'center',
  },
  description: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 18,
    color: colors.muted,
    textAlign: 'center',
  },
  button: {
    marginTop: 28,
    height: 41,
    borderRadius: 26,
    backgroundColor: colors.primary,
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.white,
  },
});
