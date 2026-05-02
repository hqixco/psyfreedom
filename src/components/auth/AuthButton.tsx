import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, typography } from '../../constants/theme';

type AuthButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: object;
};

export function AuthButton({ title, onPress, disabled = false, style }: AuthButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled ? styles.buttonDisabled : null, style]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#B7DCE2',
  },
  text: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.white,
  },
});
