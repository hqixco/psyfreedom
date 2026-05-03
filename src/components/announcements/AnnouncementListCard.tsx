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
    marginHorizontal: 16,
    marginBottom: 15,
    padding: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C7E9F2',
    backgroundColor: colors.white,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    paddingRight: 12,
    padding: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    height: 18,
    borderRadius: 360,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 12,
    lineHeight: 18,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  date: {
    marginBottom: 7,
    fontSize: 14,
    lineHeight: 20,
    ...typography.Inter[600],
    color: colors.primary,
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  image: {
    width: 114,
    height: 124,
    borderRadius: 8,
    resizeMode: 'cover',
    alignSelf: 'center',
    backgroundColor: colors.cardLight,
  },
});

