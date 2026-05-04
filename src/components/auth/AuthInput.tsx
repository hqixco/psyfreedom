import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { colors } from '../../constants/theme';

type AuthInputProps = TextInputProps & {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
};

export function AuthInput({ label, containerStyle, labelStyle, inputStyle, ...props }: AuthInputProps) {
  return (
    <View style={containerStyle}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        {...props}
        style={[styles.input, inputStyle, props.style]}
        placeholderTextColor="#8A8A8A"
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
