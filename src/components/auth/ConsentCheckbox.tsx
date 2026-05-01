import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type ConsentCheckboxProps = {
  checked: boolean;
  onToggle: () => void;
};

export function ConsentCheckbox({ checked, onToggle }: ConsentCheckboxProps) {
  return (
    <Pressable style={styles.container} onPress={onToggle}>
      <View style={[styles.box, checked ? styles.boxChecked : null]}>
        {checked ? <Ionicons name="checkmark" size={14} color={colors.white} /> : null}
      </View>
      <Text style={styles.text}>
        Я принимаю <Text style={styles.link}>Политику конфиденциальности</Text>{'\n'}
        и <Text style={styles.link}>Согласие на обработку персональных данных</Text>
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B7DCE2',
    marginRight: 10,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: colors.muted,
  },
  link: {
    color: colors.primary,
    fontWeight: '600',
  },
});
