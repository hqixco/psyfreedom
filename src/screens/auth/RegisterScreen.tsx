import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthButton } from '../../components/auth/AuthButton';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthInput } from '../../components/auth/AuthInput';
import { ConsentCheckbox } from '../../components/auth/ConsentCheckbox';
import { colors, typography } from '../../constants/theme';

type RegisterScreenProps = {
  name: string;
  phone: string;
  password: string;
  repeatPassword: string;
  consent: boolean;
  onBack: () => void;
  onChangeName: (value: string) => void;
  onChangePhone: (value: string) => void;
  onChangePassword: (value: string) => void;
  onChangeRepeatPassword: (value: string) => void;
  onToggleConsent: () => void;
  onSubmit: () => void;
};

export function RegisterScreen({
  name,
  phone,
  password,
  repeatPassword,
  consent,
  onBack,
  onChangeName,
  onChangePhone,
  onChangePassword,
  onChangeRepeatPassword,
  onToggleConsent,
  onSubmit,
}: RegisterScreenProps) {
  const isDisabled =
    !name.trim() ||
    !phone.trim() ||
    !password ||
    !repeatPassword ||
    password !== repeatPassword ||
    !consent;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container}>
          <AuthHeader onBack={onBack} />
          <Text style={styles.title}>Регистрация</Text>

          <AuthInput
            label="Имя или название организации"
            value={name}
            onChangeText={onChangeName}
            placeholder="Имя или название организации"
            containerStyle={styles.field}
          />
          <AuthInput
            label="Номер телефона"
            value={phone}
            onChangeText={onChangePhone}
            placeholder="+7 (987)654-32-10"
            keyboardType="phone-pad"
            containerStyle={styles.field}
          />
          <AuthInput
            label="Придумайте пароль"
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry
            containerStyle={styles.field}
          />
          <AuthInput
            label="Повторите пароль"
            value={repeatPassword}
            onChangeText={onChangeRepeatPassword}
            secureTextEntry
            containerStyle={styles.field}
          />

          <AuthButton
            title="Зарегистрироваться"
            onPress={onSubmit}
            disabled={isDisabled}
            style={styles.button}
          />
          <ConsentCheckbox checked={consent} onToggle={onToggleConsent} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
    ...typography.Inter[700],
    color: colors.primaryDark,
    marginBottom: 34,
    marginTop: 20,
  },
  field: {
    marginBottom: 18,
  },
  button: {
    marginTop: 10,
  },
});
