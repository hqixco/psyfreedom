import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FavoriteButton } from '../../components/video-journal/FavoriteButton';
import { VideoAuthorSection } from '../../components/video-journal/VideoAuthorSection';
import { VideoDetailsHeader } from '../../components/video-journal/VideoDetailsHeader';
import { VideoHero } from '../../components/video-journal/VideoHero';
import { colors, typography } from '../../constants/theme';
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
        <FavoriteButton
          isFavorite={isFavorite}
          onPress={() => setIsFavorite((value) => !value)}
          buttonStyle={styles.favoriteButton}
          activeButtonStyle={styles.favoriteButtonActive}
          iconStyle={styles.favoriteIcon}
          textStyle={styles.favoriteText}
        />
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
    marginTop: 13,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  topicChip: {
    marginTop: 10,
    alignSelf: 'flex-start',
    height: 18,
    borderRadius: 13,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicText: {
    fontSize: 12,
    lineHeight: 18,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  description: {
    marginTop: 29,
    marginBottom: 8,
    fontSize: 16,
    fontWeight  : '400',
    lineHeight: 20,
    color: colors.primaryDark,
  },
  favoriteButton: {
    marginHorizontal: 16,
    marginTop: 42,
    marginBottom: 24,
    height: 46,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButtonActive: {
    backgroundColor: '#EAF8FA',
  },
  favoriteIcon: {
    marginRight: 10,
  },
  favoriteText: {
    fontSize: 14,
    lineHeight: 46,
    ...typography.Inter[500],
    color: colors.primary,
  },
});
