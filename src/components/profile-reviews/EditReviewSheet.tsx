import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/theme';
import { StarsRating } from './StarsRating';

export function EditReviewSheet({
  visible,
  title,
  objectTitle,
  rating,
  text,
  submitLabel,
  onChangeRating,
  onChangeText,
  onClose,
  onSubmit,
}: {
  visible: boolean;
  title: string;
  objectTitle: string;
  rating: number;
  text: string;
  submitLabel: string;
  onChangeRating: (value: number) => void;
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

          <Text style={styles.objectTitle}>{objectTitle}</Text>
          <Text style={styles.label}>Поставьте оценку</Text>
          <View style={styles.starsRow}>
            <StarsRating rating={rating} onChange={onChangeRating} />
          </View>

          <TextInput
            value={text}
            onChangeText={onChangeText}
            placeholder="Напишите что-нибудь"
            placeholderTextColor="#B0B0B0"
            style={styles.input}
            multiline
            textAlignVertical="top"
            maxLength={3000}
          />

          <Text style={styles.hint}>
            Отзыв может содержать не более 3000 знаков включая пробелы.
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
    maxHeight: '88%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  objectTitle: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  label: {
    marginTop: 22,
    fontSize: 16,
    color: colors.primaryDark,
  },
  starsRow: {
    marginTop: 14,
  },
  input: {
    marginTop: 24,
    minHeight: 150,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 14,
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
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
});
