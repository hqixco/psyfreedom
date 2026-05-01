import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/theme';

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
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]}>
          <Pressable style={styles.option} onPress={onPickPhoto}>
            <Text style={styles.optionText}>Выбрать фото</Text>
          </Pressable>
          <Pressable style={styles.option} onPress={onTakePhoto}>
            <Text style={styles.optionText}>Сделать фото</Text>
          </Pressable>
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
    paddingTop: 20,
  },
  option: {
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primaryDark,
  },
});
