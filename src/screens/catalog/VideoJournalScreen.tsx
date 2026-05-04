import { ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { VideoGrid } from '../../components/video-journal/VideoGrid';
import { VideoJournalHeader } from '../../components/video-journal/VideoJournalHeader';
import { colors } from '../../constants/theme';
import { VideoJournalItem, videoJournalItems } from '../../data/videoJournalData';

type VideoJournalScreenProps = {
  onBack: () => void;
  onSearch: () => void;
  onOpenVideo: (item: VideoJournalItem) => void;
};

export function VideoJournalScreen({ onBack, onSearch, onOpenVideo }: VideoJournalScreenProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const cardWidth = (width - 16 * 2 - 10) / 2;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: 100 + insets.bottom }]}
      >
        <VideoJournalHeader onBack={onBack} onSearch={onSearch} />
        <VideoGrid items={videoJournalItems} onPressItem={onOpenVideo} cardWidth={cardWidth} />
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
});
