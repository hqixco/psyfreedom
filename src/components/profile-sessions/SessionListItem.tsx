import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { SessionItem } from '../../data/mySessionsData';

export function SessionListItem({ item, onPress }: { item: SessionItem; onPress: (item: SessionItem) => void }) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(item)}>
      <Image source={item.specialistAvatar} style={styles.avatar} />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title} в {item.time}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {item.specialistName}
        </Text>
        <Text style={styles.status} numberOfLines={1}>
          {item.status}
        </Text>
      </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 8,
    minHeight: 84,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  status: {
    fontSize: 14,
    color: colors.primary,
    ...typography.Inter[400],
  },
});
