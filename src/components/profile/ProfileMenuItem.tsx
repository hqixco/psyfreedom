import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, typography } from '../../constants/theme';

type ProfileMenuItemProps = {
  title: string;
  onPress: () => void;
};

export function ProfileMenuItem({ title, onPress }: ProfileMenuItemProps) {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Ionicons name="chevron-forward" size={15} color={colors.primaryDark} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
});
