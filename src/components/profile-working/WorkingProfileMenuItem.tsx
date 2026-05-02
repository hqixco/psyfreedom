import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function WorkingProfileMenuItem({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Ionicons name="chevron-forward" size={22} color={colors.primaryDark} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  text: {
    fontSize: 17,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
});
