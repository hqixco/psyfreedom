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
    lineHeight: 17,
    fontWeight: '400',
    color: colors.primaryDark,
    marginBottom: 8,
  },
  input: {
    height: 41,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    paddingHorizontal: 14,
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
    backgroundColor: colors.white,
    marginBottom: 14,
  },
});
