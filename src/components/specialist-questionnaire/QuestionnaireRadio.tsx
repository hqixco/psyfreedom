import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

export function QuestionnaireRadio({
  label,
  checked,
  onPress,
}: {
  label: string;
  checked: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={[styles.outer, checked ? styles.outerActive : null]}>
        {checked ? <View style={styles.inner} /> : null}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  outer: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'rgba(193, 212, 217, 1)',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  outerActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  inner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  label: {
    fontSize: 16,
    color: colors.primaryDark,
  },
});
