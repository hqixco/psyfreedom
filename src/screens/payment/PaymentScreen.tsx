import { Ionicons } from '@expo/vector-icons';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { PaymentCheckbox } from '../../components/payment/PaymentCheckbox';
import { PaymentInput } from '../../components/payment/PaymentInput';
import { colors, typography } from '../../constants/theme';
import { paymentFormInitialValues } from '../../data/paymentData';

type PaymentScreenProps = {
  onBack: () => void;
  setBottomTabsVisible?: (visible: boolean) => void;
};

function formatCardNumber(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 6);
  if (digits.length <= 2) {
    return digits;
  }
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export function PaymentScreen({ onBack, setBottomTabsVisible }: PaymentScreenProps) {
  const insets = useSafeAreaInsets();
  const [cardNumber, setCardNumber] = useState(paymentFormInitialValues.cardNumber);
  const [expiry, setExpiry] = useState(paymentFormInitialValues.expiry);
  const [cvc, setCvc] = useState(paymentFormInitialValues.cvc);
  const [email, setEmail] = useState(paymentFormInitialValues.email);
  const [sendReceipt, setSendReceipt] = useState(paymentFormInitialValues.sendReceipt);

  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);

    return () => {
      setBottomTabsVisible(true);
    };
  }, [setBottomTabsVisible]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[styles.content, { paddingBottom: 40 + insets.bottom }]}
        >
          <View style={styles.header}>
            <Pressable style={styles.backButton} onPress={onBack}>
              <BackChevronIcon color={colors.primaryDark} />
            </Pressable>
            <Text style={styles.title}>Оплата билетов</Text>
          </View>

          <PaymentInput
            label="Номер карты"
            value={cardNumber}
            onChangeText={(value) => setCardNumber(formatCardNumber(value))}
            placeholder="2200 0000 0000 0000"
            keyboardType="number-pad"
            maxLength={19}
            labelStyle={styles.inputLabel}
            inputStyle={styles.input}
          />

          <View style={styles.row}>
            <View style={styles.rowItem}>
              <PaymentInput
                label="Срок действия"
                value={expiry}
                onChangeText={(value) => setExpiry(formatExpiry(value))}
                placeholder="ММ/ГГГГ"
                keyboardType="number-pad"
                maxLength={7}
                labelStyle={styles.inputLabel}
                inputStyle={styles.input}
              />
            </View>
            <View style={styles.rowItem}>
              <PaymentInput
                label="Код CVC"
                value={cvc}
                onChangeText={(value) => setCvc(value.replace(/\D/g, '').slice(0, 3))}
                placeholder="000"
                keyboardType="number-pad"
                maxLength={3}
                labelStyle={styles.inputLabel}
                inputStyle={styles.input}
              />
            </View>
          </View>

          <PaymentInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="info@mail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            containerStyle={styles.inputBlock}
            labelStyle={styles.inputLabel}
            inputStyle={styles.input}
          />

          <PaymentCheckbox
            checked={sendReceipt}
            label="Отправить квитанцию на E-mail"
            onPress={() => setSendReceipt((value) => !value)}
          />

          <Pressable
            style={styles.payButton}
            onPress={() => {
              console.log({
                cardNumber,
                expiry,
                cvc,
                email,
                sendReceipt,
              });
              Alert.alert('Оплата', 'Платеж успешно отправлен в тестовом режиме');
            }}
          >
            <Text style={styles.payButtonText}>Оплатить</Text>
          </Pressable>

          <Text style={styles.offerText}>
            Оплачивая подписку, я соглашаюсь с{' '}
            <Text style={styles.offerLink}>Публичной офертой</Text>
          </Text>
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
  keyboard: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  header: {
    paddingTop: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  backButton: {
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 32,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 10,
  },
  rowItem: {
    flex: 1,
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 12,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  input: {
    height: 41,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
  },
  inputBlock: {
    marginTop: 14,
  },
  payButton: {
    marginTop: 17,
    height: 41,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  payButtonText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.white,
  },
  offerText: {
    marginTop: 18,
    fontSize: 12,
    lineHeight: 16,
    color: colors.muted,
    textAlign: 'center',
  },
  offerLink: {
    color: colors.primary,
    ...typography.Inter[600],
  },
});
