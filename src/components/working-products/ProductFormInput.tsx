import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { colors } from '../../constants/theme';

export function ProductFormInput({
  label,
  containerStyle,
  ...props
}: TextInputProps & { label: string; containerStyle?: StyleProp<ViewStyle> }) {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        placeholderTextColor="#8A8A8A"
        style={[styles.input, props.multiline ? styles.inputMultiline : null, props.style]}
      />
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
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    fontSize: 15,
    color: colors.primaryDark,
    marginBottom: 16,
  },
  inputMultiline: {
    height: undefined,
  },
});
