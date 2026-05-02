import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';

export function ProductActionsSheet({
  visible,
  archived,
  onClose,
  onEdit,
  onArchiveToggle,
}: {
  visible: boolean;
  archived: boolean;
  onClose: () => void;
  onEdit: () => void;
  onArchiveToggle: () => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]}>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color={colors.primaryDark} />
          </Pressable>

          <View style={styles.buttonsRow}>
            <Pressable style={styles.outlineButton} onPress={onEdit}>
              <Text style={styles.outlineButtonText}>Редактировать</Text>
            </Pressable>
            <Pressable style={styles.outlineButton} onPress={onArchiveToggle}>
              <Text style={styles.outlineButtonText}>{archived ? 'Восстановить' : 'В архив'}</Text>
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
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  buttonsRow: {
    marginTop: 52,
    flexDirection: 'row',
    gap: 10,
  },
  outlineButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButtonText: {
    color: colors.primary,
    fontSize: 15,
    ...typography.Inter[700],
  },
});
