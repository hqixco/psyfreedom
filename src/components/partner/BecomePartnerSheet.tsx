import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/theme';

type PartnerForm = {
  name: string;
  phone: string;
  email: string;
};

export function BecomePartnerSheet({
  visible,
  form,
  onChangeForm,
  onClose,
  onSubmit,
}: {
  visible: boolean;
  form: PartnerForm;
  onChangeForm: (next: PartnerForm) => void;
  onClose: () => void;
  onSubmit: () => void;
}) {
  const insets = useSafeAreaInsets();
  const isDisabled = !form.name.trim() || !form.phone.trim() || !form.email.trim();

  return (
    <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Стать партнером</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          <Text style={styles.label}>Имя Фамилия или название организации</Text>
          <TextInput
            value={form.name}
            onChangeText={(name) => onChangeForm({ ...form, name })}
            style={styles.input}
            placeholder="Имя Фамилия или название организации"
            placeholderTextColor="#8A8A8A"
          />

          <Text style={styles.label}>Номер телефона</Text>
          <TextInput
            value={form.phone}
            onChangeText={(phone) => onChangeForm({ ...form, phone })}
            style={styles.input}
            placeholder="+7 (987)654-32-10"
            placeholderTextColor="#8A8A8A"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            value={form.email}
            onChangeText={(email) => onChangeForm({ ...form, email })}
            style={styles.input}
            placeholder="info@mail.ru"
            placeholderTextColor="#8A8A8A"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Pressable
            style={[styles.submitButton, isDisabled && styles.submitButtonDisabled]}
            onPress={onSubmit}
            disabled={isDisabled}
          >
            <Text style={styles.submitButtonText}>Оставить заявку</Text>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  label: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.primaryDark,
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    paddingHorizontal: 18,
    fontSize: 16,
    color: colors.primaryDark,
    marginBottom: 18,
  },
  submitButton: {
    marginTop: 6,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#B7DCE2',
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
