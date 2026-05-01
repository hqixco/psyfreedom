import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { Announcement } from '../../data/announcementsData';

type AnnouncementInfoProps = {
  announcement: Announcement;
};

export function AnnouncementInfo({ announcement }: AnnouncementInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{announcement.dateRange ?? announcement.date}</Text>
      <Text style={styles.title}>{announcement.title}</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{announcement.typeLabel}</Text>
      </View>
      <Text style={styles.description}>{announcement.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 14,
  },
  date: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '700',
    color: colors.primary,
  },
  title: {
    marginTop: 8,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  badge: {
    marginTop: 12,
    alignSelf: 'flex-start',
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 13,
    color: colors.primaryDark,
  },
  description: {
    marginTop: 34,
    fontSize: 19,
    lineHeight: 26,
    color: colors.primaryDark,
  },
});

