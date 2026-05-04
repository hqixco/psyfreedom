import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';
import { StarsRating } from './StarsRating';

export function EditReviewSheet({
  visible,
  title,
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

  if (!visible) {
    return null;
  }

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
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 18 + insets.bottom }]}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
            <Text style={styles.label}>Поставьте оценку</Text>
            <View style={styles.starsRow}>
              <StarsRating rating={rating} onChange={onChangeRating} size={24} gap={6} />
            </View>

            <TextInput
              value={text}
              onChangeText={onChangeText}
              placeholder="Напишите свой отзыв"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
              multiline
              textAlignVertical="top"
              maxLength={3000}
            />

            <Text style={styles.hint}>
              Отзыв может содержать не более 3000 знаков включая пробелы.
            </Text>
          </ScrollView>

          <View style={styles.footer}>
            <Pressable style={styles.submitButton} onPress={onSubmit}>
              <Text style={styles.submitButtonText}>{submitLabel}</Text>
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
    paddingTop: 17,
    maxHeight: '88%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: 20,
    lineHeight: 30,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  content: {
    paddingTop: 13,
    paddingBottom: 12,
  },
  label: {
    fontSize: 12,
    color: colors.muted,
  },
  starsRow: {
    marginTop: 3,
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
    marginTop: 5,
    fontSize: 11,
    lineHeight: 14,
    color: '#B0B0B0',
  },
  footer: {
    paddingTop: 14,
    backgroundColor: colors.white,
  },
  submitButton: {
    height: 41,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.white,
  },
});
