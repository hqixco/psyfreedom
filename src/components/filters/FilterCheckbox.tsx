import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type FilterCheckboxProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
  variant?: 'square' | 'radio';
};

export function FilterCheckbox({ label, checked, onPress, variant = 'square' }: FilterCheckboxProps) {
  const isRadio = variant === 'radio';

  return (
    <Pressable style={styles.checkboxRow} onPress={onPress}>
      <View
        style={[
          styles.checkbox,
          isRadio ? styles.radio : styles.square,
          checked ? styles.checkboxActive : null,
        ]}
      >
        {checked ? (
          isRadio ? (
            <View style={styles.radioInner} />
          ) : (
            <Ionicons name="checkmark" size={10} color={colors.white} />
          )
        ) : null}
      </View>
      <Text style={styles.checkboxText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  checkbox: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#B7DCE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 12,
    height: 12,
    borderRadius: 3,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  checkboxActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  radioInner: {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    backgroundColor: colors.white,
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
    color: colors.primaryDark,
  },
});
