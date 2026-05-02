import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { Announcement } from '../../data/announcementsData';

type AnnouncementListCardProps = {
  item: Announcement;
  onPress: () => void;
};

export function AnnouncementListCard({ item, onPress }: AnnouncementListCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.typeLabel}</Text>
        </View>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Image source={item.image} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 142,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D7EDF1',
    backgroundColor: colors.white,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    paddingRight: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 13,
    ...typography.Inter[500],
    color: colors.primaryDark,
  },
  date: {
    marginBottom: 12,
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[700],
    color: colors.primary,
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  image: {
    width: 118,
    height: 118,
    borderRadius: 8,
    resizeMode: 'cover',
    alignSelf: 'center',
    backgroundColor: colors.cardLight,
  },
});

