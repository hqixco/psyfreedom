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
            labelStyle={styles.fieldLabel}
            inputStyle={styles.fieldInput}
          />
          <AuthInput
            label="Номер телефона"
            value={phone}
            onChangeText={onChangePhone}
            placeholder="+7 (987)654-32-10"
            keyboardType="phone-pad"
            containerStyle={styles.field}
            labelStyle={styles.fieldLabel}
            inputStyle={styles.fieldInput}
          />
          <AuthInput
            label="Придумайте пароль"
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry
            containerStyle={styles.field}
            labelStyle={styles.fieldLabel}
            inputStyle={styles.fieldInput}
          />
          <AuthInput
            label="Повторите пароль"
            value={repeatPassword}
            onChangeText={onChangeRepeatPassword}
            secureTextEntry
            containerStyle={styles.field}
            labelStyle={styles.fieldLabel}
            inputStyle={styles.fieldInput}
          />

          <AuthButton
            title="Зарегистрироваться"
            onPress={onSubmit}
            disabled={isDisabled}
            style={styles.button}
          />
          <ConsentCheckbox
            checked={consent}
            onToggle={onToggleConsent}
            containerStyle={styles.consentContainer}
            boxStyle={styles.consentBox}
            textStyle={styles.consentText}
            linkStyle={styles.consentLink}
          />
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
    fontSize: 24,
    lineHeight: 30,
    ...typography.Inter[600],
    color: colors.primaryDark,
    marginBottom: 18,
    marginTop: 15,
  },
  field: {
    marginBottom: 13,
  },
  fieldLabel: {
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '400',
    color: colors.primaryDark,
    marginBottom: 8,
  },
  fieldInput: {
    height: 41,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    paddingHorizontal: 14,
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
    backgroundColor: colors.white,
  },
  button: {
    height: 41,
    marginTop: 4,
  },
  consentContainer: {
    marginTop: 10,
  },
  consentBox: {
    width: 18,
    height: 18,
    borderRadius: 5,
  },
  consentText: {
    fontSize: 13,
    lineHeight: 16,
    color: colors.muted,
  },
  consentLink: {
    color: colors.primary,
    ...typography.Inter[400],
  },
});
