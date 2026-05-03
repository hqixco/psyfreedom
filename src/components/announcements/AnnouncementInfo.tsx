import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
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
    marginTop: 9,
  },
  date: {
    fontSize: 14,
    lineHeight: 21,
    ...typography.Inter[600],
    color: colors.primary,
  },
  title: {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  badge: {
    marginTop: 7,
    alignSelf: 'flex-start',
    height: 18,
    borderRadius: 360,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 12,
    color: colors.primaryDark,
  },
  description: {
    marginTop: 34,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: colors.primaryDark,
  },
});

