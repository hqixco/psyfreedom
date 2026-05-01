import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

export function QuestionnaireCheckbox({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <Pressable style={styles.row} onPress={onToggle}>
      <View style={[styles.box, checked ? styles.boxActive : null]}>
        {checked ? <Ionicons name="checkmark" size={12} color={colors.white} /> : null}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  box: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#B7DCE2',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  label: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: colors.primaryDark,
  },
});
