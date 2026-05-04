import { useEffect, useMemo, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthButton } from '../../components/auth/AuthButton';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { SmsCodeInput } from '../../components/auth/SmsCodeInput';
import { colors, typography } from '../../constants/theme';

type SmsCodeScreenProps = {
  phone: string;
  onBack: () => void;
  onSubmit: () => void;
};

export function SmsCodeScreen({ phone, onBack, onSubmit }: SmsCodeScreenProps) {
  const [code, setCode] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    if (secondsLeft === 0) {
      return undefined;
    }

    const timer = setTimeout(() => setSecondsLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const timerLabel = useMemo(() => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, [secondsLeft]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container}>
          <AuthHeader onBack={onBack} />
          <Text style={styles.title}>Код из СМС</Text>
          <Text style={styles.subtitle}>Отправлен на номер {phone}</Text>

          <SmsCodeInput
            value={code}
            onChange={setCode}
            containerStyle={styles.codeContainer}
            cellStyle={styles.codeCell}
            activeCellStyle={styles.codeCellActive}
            digitStyle={styles.codeDigit}
          />

          <AuthButton
            title="Далее"
            onPress={onSubmit}
            disabled={code.length < 4}
            style={styles.button}
            textStyle={styles.buttonText}
          />

          <Text style={styles.timer}>
            {secondsLeft > 0
              ? `Отправить код повторно через ${timerLabel}`
              : 'Отправить код повторно'}
          </Text>

          <Pressable onPress={() => console.log('sms help')}>
            <Text style={styles.helpLink}>Не приходит код?</Text>
          </Pressable>
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
    marginTop: 20,
  },
  subtitle: {
    marginTop: 9,
    fontSize: 12,
    ...typography.Inter[400],
    lineHeight: 16,
    color: colors.primaryDark,
  },
  codeContainer: {
    marginTop: 28,
  },
  codeCell: {
    width: 86,
    height: 86,
    borderRadius: 12,
    borderColor: '#A9A9A9',
  },
  codeCellActive: {
    borderColor: colors.primary,
  },
  codeDigit: {
    fontSize: 28,
    fontWeight: '400',
  },
  button: {
    height: 41,
    marginTop: 14,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  timer: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 14,
    color: colors.muted,
  },
  helpLink: {
    marginTop: 14,
    textAlign: 'center',
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
});
