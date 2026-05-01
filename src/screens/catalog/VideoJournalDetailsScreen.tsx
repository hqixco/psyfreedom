import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FavoriteButton } from '../../components/video-journal/FavoriteButton';
import { VideoAuthorSection } from '../../components/video-journal/VideoAuthorSection';
import { VideoDetailsHeader } from '../../components/video-journal/VideoDetailsHeader';
import { VideoHero } from '../../components/video-journal/VideoHero';
import { colors } from '../../constants/theme';
import { VideoJournalItem } from '../../data/videoJournalData';

type VideoJournalDetailsScreenProps = {
  item: VideoJournalItem;
  onBack: () => void;
};

export function VideoJournalDetailsScreen({ item, onBack }: VideoJournalDetailsScreenProps) {
  const insets = useSafeAreaInsets();
  const [isFavorite, setIsFavorite] = useState(Boolean(item.isFavorite));

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: 90 + insets.bottom }]}
      >
        <VideoDetailsHeader onBack={onBack} onShare={() => console.log('share video', item.id)} />
        <VideoHero image={item.image} onPlay={() => console.log('play video', item.id)} />

        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.topicChip}>
            <Text style={styles.topicText}>{item.topic}</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <VideoAuthorSection author={item.author} />
        <FavoriteButton isFavorite={isFavorite} onPress={() => setIsFavorite((value) => !value)} />
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
  info: {
    marginHorizontal: 16,
    marginTop: 18,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  topicChip: {
    marginTop: 10,
    alignSelf: 'flex-start',
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.primaryDark,
  },
  description: {
    marginTop: 36,
    fontSize: 19,
    lineHeight: 26,
    color: colors.primaryDark,
  },
});
