import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthButton } from '../../components/auth/AuthButton';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthInput } from '../../components/auth/AuthInput';
import { ConsentCheckbox } from '../../components/auth/ConsentCheckbox';
import { colors, typography } from '../../constants/theme';

type LoginScreenProps = {
  phone: string;
  consent: boolean;
  onBack: () => void;
  onChangePhone: (value: string) => void;
  onToggleConsent: () => void;
  onSubmit: () => void;
};

export function LoginScreen({
  phone,
  consent,
  onBack,
  onChangePhone,
  onToggleConsent,
  onSubmit,
}: LoginScreenProps) {
  const isDisabled = !consent || phone.trim().length === 0;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container}>
          <AuthHeader onBack={onBack} />
          <Text style={styles.title}>Вход</Text>
          <AuthInput
            label="Номер телефона"
            value={phone}
            onChangeText={onChangePhone}
            keyboardType="phone-pad"
            placeholder="+7 (987)654-32-10"
            containerStyle={styles.field}
          />
          <AuthButton
            title="Получить СМС с кодом"
            onPress={onSubmit}
            disabled={isDisabled}
            style={styles.button}
            textStyle={styles.buttonText}
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
    lineHeight: 36,
    ...typography.Inter[600],
    color: colors.primaryDark,
    marginBottom: 14,
    marginTop: 20,
  },
  field: {
    marginBottom: 0,
  },
  button: {
    height: 41,
    marginTop: 18,
  },
  buttonText: {
    fontSize: 14,
    ...typography.Inter[600],
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
