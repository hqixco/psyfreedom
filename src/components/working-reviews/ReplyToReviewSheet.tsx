import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/theme';

export function ReplyToReviewSheet({
  visible,
  title,
  text,
  submitLabel,
  onChangeText,
  onClose,
  onSubmit,
}: {
  visible: boolean;
  title: string;
  text: string;
  submitLabel: string;
  onChangeText: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}) {
  const insets = useSafeAreaInsets();

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

          <TextInput
            value={text}
            onChangeText={onChangeText}
            placeholder="Напишите ответ"
            placeholderTextColor="#B0B0B0"
            style={styles.input}
            multiline
            textAlignVertical="top"
            maxLength={3000}
          />

          <Text style={styles.hint}>
            Ответ может содержать не более 3000 знаков включая пробелы.
          </Text>

          <Pressable style={styles.submitButton} onPress={onSubmit}>
            <Text style={styles.submitButtonText}>{submitLabel}</Text>
          </Pressable>
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
    paddingTop: 22,
    maxHeight: '86%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  input: {
    marginTop: 22,
    minHeight: 150,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 14,
    textAlignVertical: 'top',
    fontSize: 15,
    color: colors.primaryDark,
  },
  hint: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 17,
    color: '#B0B0B0',
  },
  submitButton: {
    marginTop: 28,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
