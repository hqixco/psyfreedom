import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { SessionItem } from '../../data/mySessionsData';

export function SessionListItem({ item, onPress }: { item: SessionItem; onPress: (item: SessionItem) => void }) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(item)}>
      <View style={styles.left}>
        <Text style={styles.title}>{item.title} в {item.time}</Text>
        <Text style={styles.subtitle}>{item.specialistRole}</Text>
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
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
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
  },
  status: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
    marginRight: 6,
  },
});
