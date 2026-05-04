import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../constants/theme';

type PaymentInputProps = TextInputProps & {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
};

export function PaymentInput({
  label,
  containerStyle,
  labelStyle,
  inputStyle,
  style,
  ...props
}: PaymentInputProps) {
  return (
    <View style={containerStyle}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        {...props}
        placeholderTextColor={colors.muted}
        style={[styles.input, inputStyle, style]}
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
  },
});
