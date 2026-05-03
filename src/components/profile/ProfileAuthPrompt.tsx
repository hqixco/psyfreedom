import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

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
    fontSize: 24,
    lineHeight: 34,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  description: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 15,
    color: colors.primaryDark,
  },
  loginButton: {
    marginTop: 24,
    width: 243,
    height: 41,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
  loginButtonText: {
    fontSize: 14,
    ...typography.Inter[600],
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
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primary,
  },
});
