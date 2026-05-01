import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '../../constants/theme';

type AuthInputProps = TextInputProps & {
  label: string;
  containerStyle?: object;
};

export function AuthInput({ label, containerStyle, ...props }: AuthInputProps) {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        style={[styles.input, props.style]}
        placeholderTextColor="#8A8A8A"
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: colors.white,
  },
});
