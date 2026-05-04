import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';

export function PurchaseActionsSheet({
  visible,
  onClose,
  onDownload,
  onReview,
}: {
  visible: boolean;
  onClose: () => void;
  onDownload: () => void;
  onReview: () => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      presentationStyle="overFullScreen"
      statusBarTranslucent
      navigationBarTranslucent
    >
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]}>
          <Pressable style={styles.closeButton} onPress={onClose} hitSlop={12}>
            <Ionicons name="close" size={24} color={colors.primaryDark} />
          </Pressable>
          <View style={styles.buttonsRow}>
            <Pressable style={styles.button} onPress={onDownload}>
              <Text style={styles.buttonText}>Скачать</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onReview}>
              <Text style={styles.buttonText}>Оставить отзыв</Text>
            </Pressable>
          </View>
        </View>
      </View>
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
    paddingTop: 20,
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1,
  },
  buttonsRow: {
    marginTop: 52,
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    height: 41,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.primary,
    fontSize: 14,
    ...typography.Inter[600],
  },
});
