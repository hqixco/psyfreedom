import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../constants/theme';

export type EditableProfile = {
  name: string;
  phone: string;
  email: string;
  birthDate: string;
  photo: number | null;
};

type EditProfileFormProps = {
  value: EditableProfile;
  onChange: (next: EditableProfile) => void;
  onPressPhoto: () => void;
  onSave: () => void;
};

export function EditProfileForm({ value, onChange, onPressPhoto, onSave }: EditProfileFormProps) {
  return (
    <View>
      <Pressable style={styles.photoWrap} onPress={onPressPhoto}>
        {value.photo ? (
          <Image source={value.photo} style={styles.photo} />
        ) : (
          <Text style={styles.photoPlaceholder}>Добавить{'\n'}фото</Text>
        )}
      </Pressable>

      <Field
        label="Ваше Имя"
        value={value.name}
        onChangeText={(name) => onChange({ ...value, name })}
      />
      <Field
        label="Номер телефона"
        value={value.phone}
        onChangeText={(phone) => onChange({ ...value, phone })}
        keyboardType="phone-pad"
      />
      <Field
        label="E-mail"
        value={value.email}
        onChangeText={(email) => onChange({ ...value, email })}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Дата рождения</Text>
      <Pressable style={styles.input} onPress={() => console.log('pick birth date')}>
        <Text style={[styles.inputText, !value.birthDate ? styles.placeholderText : null]}>
          {value.birthDate || 'Выбрать дату рождения'}
        </Text>
      </Pressable>

      <Pressable style={styles.saveButton} onPress={onSave}>
        <Text style={styles.saveButtonText}>Сохранить изменения</Text>
      </Pressable>
    </View>
  );
}

function Field({
  label,
  value,
  onChangeText,
  ...props
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: 'default' | 'phone-pad' | 'email-address';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput value={value} onChangeText={onChangeText} style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  photoWrap: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.cardLight,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 28,
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  photoPlaceholder: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  field: {
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    color: colors.primaryDark,
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    fontSize: 16,
    color: colors.primaryDark,
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  placeholderText: {
    color: colors.muted,
  },
  saveButton: {
    marginTop: 16,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
