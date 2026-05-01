import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

export function EmptySessionsState({ onBookSession }: { onBookSession: () => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>У вас пока нет записей{'\n'}на прием</Text>
      <Text style={styles.text}>
        После выбора даты, времени и{'\n'}оплаты сессии, запись появится в{'\n'}вашем календаре
      </Text>
      <Pressable style={styles.button} onPress={onBookSession}>
        <Text style={styles.buttonText}>Записаться на сессию</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    marginTop: 160,
  },
  title: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    color: colors.primaryDark,
    textAlign: 'center',
  },
  text: {
    marginTop: 16,
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
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
