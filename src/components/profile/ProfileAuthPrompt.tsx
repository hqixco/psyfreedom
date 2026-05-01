import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type ProfileAuthPromptProps = {
  onLogin: () => void;
  onRegister: () => void;
};

export function ProfileAuthPrompt({ onLogin, onRegister }: ProfileAuthPromptProps) {
  return (
    <View>
      <Text style={styles.title}>Войдите в профиль</Text>
      <Text style={styles.description}>Чтобы иметь доступ ко всем{'\n'}возможностям приложения</Text>

      <Pressable style={styles.loginButton} onPress={onLogin}>
        <Text style={styles.loginButtonText}>Войти</Text>
      </Pressable>

      <Text style={styles.secondaryText}>Еще не зарегистрировались?</Text>
      <Pressable onPress={onRegister}>
        <Text style={styles.registerLink}>Регистрация</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  description: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
    color: colors.primaryDark,
  },
  loginButton: {
    marginTop: 24,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  loginButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.white,
  },
  secondaryText: {
    marginTop: 28,
    textAlign: 'center',
    fontSize: 14,
    color: '#B0B0B0',
  },
  registerLink: {
    marginTop: 6,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    color: colors.primary,
  },
});
