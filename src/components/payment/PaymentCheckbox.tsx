import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type PaymentCheckboxProps = {
  checked: boolean;
  label: string;
  onPress: () => void;
};

export function PaymentCheckbox({ checked, label, onPress }: PaymentCheckboxProps) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={[styles.checkbox, checked ? styles.checkboxActive : null]}>
        {checked ? <Ionicons name="checkmark" size={14} color={colors.white} /> : null}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B7DCE2',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  label: {
    fontSize: 14,
    color: colors.primaryDark,
  },
});

