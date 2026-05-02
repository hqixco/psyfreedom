import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';

type ConsultationPaymentSheetProps = {
  visible: boolean;
  onClose: () => void;
  onPay: () => void;
  title?: string;
  dateLabel?: string;
  sessionsCount?: number;
  price?: string;
  baseSessionPrice?: number;
};

export function ConsultationPaymentSheet({
  visible,
  onClose,
  onPay,
  title = 'Консультация',
  dateLabel = '30 декабря 2025 г. в 17:00',
  sessionsCount = 2,
  price,
  baseSessionPrice = 3000,
}: ConsultationPaymentSheetProps) {
  const insets = useSafeAreaInsets();
  const initialCount = Math.max(1, sessionsCount);
  const [count, setCount] = React.useState(initialCount);

  React.useEffect(() => {
    if (visible) {
      setCount(initialCount);
    }
  }, [initialCount, visible]);

  const total = baseSessionPrice * count;
  const formattedPrice = price ?? `${total.toLocaleString('ru-RU')} ₽`;

  return (
    <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          <Text style={styles.date}>{dateLabel}</Text>

          <View style={styles.sessionsRow}>
            <Text style={styles.sessionsLabel}>Сессии</Text>
            <View style={styles.stepper}>
              <Pressable onPress={() => setCount((current) => Math.max(1, current - 1))}>
                <Ionicons name="remove" size={20} color={colors.primaryDark} />
              </Pressable>
              <Text style={styles.count}>{count}</Text>
              <Pressable onPress={() => setCount((current) => current + 1)}>
                <Ionicons name="add" size={20} color={colors.primaryDark} />
              </Pressable>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Стоимость</Text>
            <Text style={styles.priceValue}>{formattedPrice}</Text>
          </View>

          <Pressable style={styles.payButton} onPress={onPay}>
            <Text style={styles.payButtonText}>Оплатить</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

import * as React from 'react';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  date: {
    marginBottom: 26,
    fontSize: 16,
    lineHeight: 22,
    color: colors.primaryDark,
  },
  sessionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  sessionsLabel: {
    fontSize: 18,
    color: colors.text,
  },
  stepper: {
    width: 140,
    height: 38,
    borderWidth: 1,
    borderColor: colors.primaryDark,
    borderRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  count: {
    fontSize: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 22,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  priceLabel: {
    fontSize: 18,
    color: colors.text,
  },
  priceValue: {
    fontSize: 26,
    lineHeight: 32,
    ...typography.Inter[700],
    color: colors.primary,
  },
  payButton: {
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  payButtonText: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.white,
  },
});

