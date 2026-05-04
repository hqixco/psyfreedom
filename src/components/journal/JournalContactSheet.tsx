import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';

type JournalContactSheetProps = {
  visible: boolean;
  onClose: () => void;
};

export function JournalContactSheet({ visible, onClose }: JournalContactSheetProps) {
  const insets = useSafeAreaInsets();
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
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

          <Text style={styles.title}>Напишите нам</Text>
          <Text style={styles.subtitle}>Оставьте телефон и сообщение, мы свяжемся с вами.</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Телефон</Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="+7 (___) ___-__-__"
              placeholderTextColor="#B0B0B0"
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Тестовое поле</Text>
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Напишите сообщение"
              placeholderTextColor="#B0B0B0"
              style={[styles.input, styles.textarea]}
              multiline
              textAlignVertical="top"
            />
          </View>

          <Pressable
            style={styles.submitButton}
            onPress={() => console.log('journal contact submit', phone, message)}
          >
            <Text style={styles.submitButtonText}>Отправить сообщение</Text>
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
    paddingTop: 20,
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 22,
    lineHeight: 26,
    ...typography.Inter[600],
    color: colors.primaryDark,
    paddingRight: 32,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 18,
    color: colors.muted,
  },
  field: {
    marginTop: 18,
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: colors.primaryDark,
    backgroundColor: colors.white,
  },
  textarea: {
    minHeight: 110,
    paddingTop: 14,
    marginBottom: 50,
  },
  submitButton: {
    marginTop: 32,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 15,
    ...typography.Inter[700],
  },
});
