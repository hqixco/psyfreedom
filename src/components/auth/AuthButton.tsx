import { Pressable, StyleSheet, Text } from 'react-native';
import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { colors, typography } from '../../constants/theme';

type AuthButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function AuthButton({ title, onPress, disabled = false, style, textStyle }: AuthButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled ? styles.buttonDisabled : null, style]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 41,
    borderRadius: 360,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#B7DCE2',
  },
  text: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.white,
  },
});
