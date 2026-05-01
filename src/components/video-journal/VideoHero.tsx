import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';
import { VideoJournalItem } from '../../data/videoJournalData';

type VideoHeroProps = {
  image: VideoJournalItem['image'];
  onPlay: () => void;
};

export function VideoHero({ image, onPlay }: VideoHeroProps) {
  return (
    <View style={styles.wrap}>
      <Image source={image} style={styles.image} />
      <Pressable style={styles.playButton} onPress={onPlay}>
        <Ionicons name="play" size={24} color={colors.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 16,
    marginTop: 8,
    height: 220,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.cardLight,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 46,
    height: 46,
    marginTop: -23,
    marginLeft: -23,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});

