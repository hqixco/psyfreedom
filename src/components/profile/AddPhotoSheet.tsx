import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';

type AddPhotoSheetProps = {
  visible: boolean;
  onClose: () => void;
  onPickPhoto: () => void;
  onTakePhoto: () => void;
};

export function AddPhotoSheet({ visible, onClose, onPickPhoto, onTakePhoto }: AddPhotoSheetProps) {
  const insets = useSafeAreaInsets();

  return (
    <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 18 + insets.bottom }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Выбрать фото</Text>
            <Pressable style={styles.closeButton} onPress={onClose} hitSlop={10}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          <View style={styles.actionsRow}>
            <Pressable style={styles.actionButton} onPress={onPickPhoto}>
              <Text style={styles.actionText}>Выбрать фото</Text>
            </Pressable>
            <Pressable style={styles.actionButton} onPress={onTakePhoto}>
              <Text style={styles.actionText}>Сделать фото</Text>
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
    paddingTop: 15,
  },
  header: {
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    height: 43,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#05728F',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  actionText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: '#05728F',
  },
});
