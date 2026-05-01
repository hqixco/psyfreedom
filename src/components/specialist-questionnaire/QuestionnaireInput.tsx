import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../constants/theme';

export function QuestionnaireInput({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'number-pad' | 'phone-pad' | 'email-address';
}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        style={styles.input}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.primaryDark,
    marginBottom: 6,
  },
  input: {
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    paddingHorizontal: 14,
    fontSize: 14,
    color: colors.primaryDark,
    backgroundColor: colors.white,
    marginBottom: 14,
  },
});
