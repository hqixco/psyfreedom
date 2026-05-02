import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { WorkingSessionItem } from '../../data/workingSessionsData';

export function WorkingSessionListItem({
  item,
  onPress,
}: {
  item: WorkingSessionItem;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.left}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.clientName}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.status}>{item.status}</Text>
        <Ionicons name="chevron-forward" size={20} color={colors.primaryDark} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 8,
    minHeight: 68,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: colors.muted,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  status: {
    fontSize: 14,
    color: colors.primary,
    ...typography.Inter[600],
  },
});
