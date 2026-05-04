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
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
    marginBottom: 16,
  },
  inputMultiline: {
    height: undefined,
    borderRadius: 12,
  },
});
