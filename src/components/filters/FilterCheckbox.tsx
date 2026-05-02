import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors } from '../../constants/theme';

type FilterCheckboxProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
  variant?: 'square' | 'radio';
};

export function FilterCheckbox({ label, checked, onPress, variant = 'square' }: FilterCheckboxProps) {
  const checkIconXml = `<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75 0.75L3.25 6.25L0.75 3.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  const isRadio = variant === 'radio';

  return (
    <Pressable style={styles.checkboxRow} onPress={onPress}>
      <View
        style={[
          styles.checkbox,
          isRadio ? styles.radio : styles.square,
          checked ? (isRadio ? styles.radioActive : styles.checkboxActive) : null,
        ]}
      >
        {checked ? (
          isRadio ? (
            <View style={styles.radioInner} />
          ) : (
            <SvgXml xml={checkIconXml} width={8} height={5.5} />
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
    borderRadius: 2,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#fff',
    borderColor: 'rgba(193, 212, 217, 1)',
  },
  checkboxActive: {
    backgroundColor: '#05728F',
    borderColor: '#05728F',
  },
  radioActive: {
    backgroundColor: '#05728F',
    borderColor: '#05728F',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
    color: colors.primaryDark,
  },
});
