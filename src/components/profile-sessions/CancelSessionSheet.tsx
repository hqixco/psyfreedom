import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';

const reasons = [
  'Передумал идти к этому специалисту',
  'Перезапишусь на другое время',
  'Другое',
];

export function CancelSessionSheet({
  visible,
  reason,
  onSelectReason,
  onClose,
  onConfirm,
}: {
  visible: boolean;
  reason: string;
  onSelectReason: (reason: string) => void;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      presentationStyle="overFullScreen"
      statusBarTranslucent
      navigationBarTranslucent
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]} onPress={() => undefined}>
          <Text style={styles.title}>Вы точно хотите отменить запись 19 октября в 12:00?</Text>
          <Text style={styles.subtitle}>Укажите причину отмены</Text>

          {reasons.map((item) => {
            const isActive = item === reason;
            return (
              <Pressable key={item} style={styles.radioRow} onPress={() => onSelectReason(item)}>
                <View style={[styles.radio, isActive ? styles.radioActive : null]}>
                  {isActive ? <View style={styles.dot} /> : null}
                </View>
                <Text style={styles.radioText}>{item}</Text>
              </Pressable>
            );
          })}

          <View style={styles.buttons}>
            <Pressable style={styles.noButton} onPress={onClose}>
              <Text style={styles.noButtonText}>Нет</Text>
            </Pressable>
            <Pressable style={styles.yesButton} onPress={onConfirm}>
              <Text style={styles.yesButtonText}>Да</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

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
    paddingTop: 22,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  subtitle: {
    marginTop: 22,
    fontSize: 14,
    ...typography.Inter[500],
    color: colors.primaryDark,
  },
  radioRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'rgba(193, 212, 217, 1)',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  radioActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  radioText: {
    fontSize: 16,
    color: colors.primaryDark,
    flex: 1,
  },
  buttons: {
    marginTop: 28,
    flexDirection: 'row',
    gap: 10,
  },
  noButton: {
    flex: 1,
    height: 41,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noButtonText: {
    color: colors.primary,
    ...typography.Inter[600],
    fontSize: 14,
  },
  yesButton: {
    flex: 1,
    height: 41,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yesButtonText: {
    color: colors.white,
    ...typography.Inter[600],
    fontSize: 14,
  },
});
