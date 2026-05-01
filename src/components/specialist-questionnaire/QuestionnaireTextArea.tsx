import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../constants/theme';

export function QuestionnaireTextArea({
  label,
  value,
  onChangeText,
  placeholder,
}: {
  label?: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
}) {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        style={styles.input}
        textAlignVertical="top"
        multiline
        maxLength={3000}
      />
      <Text style={styles.hint}>Не более 3000 знаков включая пробелы.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    marginBottom: 6,
  },
  label: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.primaryDark,
    marginBottom: 6,
  },
  input: {
    minHeight: 112,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    paddingHorizontal: 12,
    paddingTop: 10,
    fontSize: 14,
    color: colors.primaryDark,
  },
  hint: {
    marginTop: 6,
    fontSize: 11,
    lineHeight: 15,
    color: colors.muted,
  },
});
