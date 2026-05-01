import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '../../constants/theme';

type PaymentInputProps = TextInputProps & {
  label: string;
  containerStyle?: TextInputProps['style'];
};

export function PaymentInput({
  label,
  containerStyle,
  style,
  ...props
}: PaymentInputProps) {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        placeholderTextColor={colors.muted}
        style={[styles.input, style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    fontSize: 15,
    fontWeight: '500',
    color: colors.primaryDark,
  },
  input: {
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    fontSize: 16,
    color: colors.primaryDark,
  },
});

