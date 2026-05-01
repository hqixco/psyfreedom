import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnnouncementDetailsHeader } from '../../components/announcements/AnnouncementDetailsHeader';
import { AnnouncementHero } from '../../components/announcements/AnnouncementHero';
import { AnnouncementInfo } from '../../components/announcements/AnnouncementInfo';
import { colors } from '../../constants/theme';
import { Announcement } from '../../data/announcementsData';

type AnnouncementDetailsScreenProps = {
  announcement: Announcement;
  onBack: () => void;
};

export function AnnouncementDetailsScreen({
  announcement,
  onBack,
}: AnnouncementDetailsScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: 80 + insets.bottom }]}
      >
        <AnnouncementDetailsHeader
          onBack={onBack}
          onShare={() => console.log('share announcement', announcement.id)}
        />
        <View style={styles.heroWrap}>
          <AnnouncementHero image={announcement.image} />
        </View>
        <AnnouncementInfo announcement={announcement} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingTop: 0,
  },
  heroWrap: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
});

