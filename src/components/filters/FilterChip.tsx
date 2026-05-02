import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, typography } from '../../constants/theme';

type FilterChipProps = {
  label: string;
  onPress: () => void;
};

export function FilterChip({ label, onPress }: FilterChipProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.link}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 4,
    marginBottom: 8,
    fontSize: 12,
    ...typography.Inter[400],
    color: colors.primary,
  },
});
