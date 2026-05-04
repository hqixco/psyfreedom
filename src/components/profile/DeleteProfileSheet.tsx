import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';

type DeleteProfileSheetProps = {
  visible: boolean;
  onClose: () => void;
  onDelete: () => void;
};

export function DeleteProfileSheet({ visible, onClose, onDelete }: DeleteProfileSheetProps) {
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
        <View style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Вы действительно хотите{'\n'}удалить свой аккаунт?</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          <Text style={styles.text}>
            Если вы это сделаете, то все данные будут удалены без возможности их восстановить.
          </Text>

          <View style={styles.buttons}>
            <Pressable style={styles.deleteButton} onPress={onDelete}>
              <Text style={styles.deleteButtonText}>Удалить</Text>
            </Pressable>
            <Pressable style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Отменить</Text>
            </Pressable>
          </View>
        </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
    ...typography.Inter[600],
    color: colors.primaryDark,
    flex: 1,
  },
  text: {
    marginTop: 20,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
  deleteButton: {
    flex: 1,
    height: 41,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: colors.primary,
    fontSize: 14,
    ...typography.Inter[600],
  },
  cancelButton: {
    flex: 1,
    height: 41,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: colors.white,
    fontSize: 14,
    ...typography.Inter[600],
  },
});
