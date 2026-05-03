import { StyleSheet, Text, TextInput, TextInputProps, View, TextStyle } from 'react-native';
import { colors } from '../../constants/theme';

type PaymentInputProps = TextInputProps & {
  label: string;
  containerStyle?: TextInputProps['style'];
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
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
  input: {},
});
