import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';

type ReviewSheetProps = {
  visible: boolean;
  onClose: () => void;
};

export function ReviewSheet({ visible, onClose }: ReviewSheetProps) {
  const insets = useSafeAreaInsets();
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');

  return (
    <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Оставить отзыв</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          <Text style={styles.label}>Поставьте оценку</Text>
          <View style={styles.starsRow}>
            {Array.from({ length: 5 }).map((_, index) => {
              const value = index + 1;
              const active = value <= rating;
              return (
                <Pressable key={value} onPress={() => setRating(value)}>
                  <Ionicons
                    name="star"
                    size={36}
                    color={active ? '#FFC93C' : '#EEF3F5'}
                  />
                </Pressable>
              );
            })}
          </View>

          <TextInput
            value={text}
            onChangeText={setText}
            maxLength={3000}
            placeholder="Напишите свой отзыв"
            placeholderTextColor="#B0B0B0"
            multiline
            textAlignVertical="top"
            style={styles.input}
          />

          <Text style={styles.hint}>
            Отзыв может содержать не более 3000 знаков включая пробелы.
          </Text>

          <Pressable
            style={styles.submitButton}
            onPress={() => {
              console.log('submit review', { rating, text });
              onClose();
            }}
          >
            <Text style={styles.submitButtonText}>Оставить отзыв</Text>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  label: {
    marginTop: 22,
    fontSize: 16,
    color: colors.primaryDark,
  },
  starsRow: {
    flexDirection: 'row',
    marginTop: 14,
  },
  input: {
    marginTop: 26,
    height: 150,
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  submitButtonText: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.white,
  },
});
