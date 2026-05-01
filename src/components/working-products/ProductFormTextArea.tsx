import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../constants/theme';

export function ProductFormTextArea({
  label,
  value,
  onChangeText,
  placeholder,
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8A8A8A"
        style={styles.input}
        multiline
        maxLength={500}
        textAlignVertical="top"
      />
      <Text style={styles.hint}>Не более 500 знаков включая пробелы.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.primaryDark,
    marginBottom: 8,
  },
  input: {
    minHeight: 170,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    paddingHorizontal: 14,
    paddingTop: 12,
    fontSize: 15,
    lineHeight: 20,
    color: colors.primaryDark,
    marginBottom: 6,
  },
  hint: {
    fontSize: 13,
    lineHeight: 17,
    color: '#B0B0B0',
  },
});
