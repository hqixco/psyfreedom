import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

const emptyPurchasesIcon = require('../../../assets/bag-remove-outline.svg');

export function EmptyPurchasesState({ onGoToCatalog }: { onGoToCatalog: () => void }) {
  return (
    <View style={styles.container}>
      <Image source={emptyPurchasesIcon} style={styles.icon} />
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
  icon: {
    width: 36,
    height: 36,
    marginBottom: 17,
  },
  title: {
    fontSize: 16,
    lineHeight: 30,
    ...typography.Inter[600],
    color: colors.primaryDark,
    textAlign: 'center',
  },
  button: {
    marginTop: 27,
    height: 41,
    borderRadius: 26,
    paddingHorizontal: 88,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.white,
  },
});
