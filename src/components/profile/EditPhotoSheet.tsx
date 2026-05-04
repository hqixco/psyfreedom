import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';

type EditPhotoSheetProps = {
  visible: boolean;
  onClose: () => void;
  onDeletePhoto: () => void;
  onReplacePhoto: () => void | Promise<void>;
};

export function EditPhotoSheet({
  visible,
  onClose,
  onDeletePhoto,
  onReplacePhoto,
}: EditPhotoSheetProps) {
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
          <Pressable style={styles.option} onPress={onDeletePhoto}>
            <Text style={styles.optionText}>Удалить фото</Text>
          </Pressable>
          <Pressable style={styles.option} onPress={onReplacePhoto}>
            <Text style={styles.optionText}>Заменить фото</Text>
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
    height: 41,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
});
