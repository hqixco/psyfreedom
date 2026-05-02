import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnnouncementChips } from '../../components/announcements/AnnouncementChips';
import { AnnouncementListCard } from '../../components/announcements/AnnouncementListCard';
import { AnnouncementsHeader } from '../../components/announcements/AnnouncementsHeader';
import { colors } from '../../constants/theme';
import {
  Announcement,
  AnnouncementCategory,
  announcementChips,
  announcements,
} from '../../data/announcementsData';

type AnnouncementsScreenProps = {
  onBack: () => void;
  onOpenAnnouncement: (announcement: Announcement) => void;
};

export function AnnouncementsScreen({
  onBack,
  onOpenAnnouncement,
}: AnnouncementsScreenProps) {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState<AnnouncementCategory>('all');

  const visibleAnnouncements = useMemo(() => {
    if (activeCategory === 'all') {
      return announcements;
    }

    return announcements.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: 100 + insets.bottom }]}
      >
        <AnnouncementsHeader onBack={onBack} />
        <AnnouncementChips
          chips={announcementChips}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
        <View style={styles.list}>
          {visibleAnnouncements.map((item) => (
            <AnnouncementListCard
              key={item.id}
              item={item}
              onPress={() => onOpenAnnouncement(item)}
            />
          ))}
        </View>
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
  list: {
    paddingTop: 4,
  },
});
