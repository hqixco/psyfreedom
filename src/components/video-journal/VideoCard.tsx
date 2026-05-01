import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { VideoJournalItem } from '../../data/videoJournalData';

type VideoCardProps = {
  item: VideoJournalItem;
  width: number;
  onPress: () => void;
};

export function VideoCard({ item, width, onPress }: VideoCardProps) {
  const imageHeight = width * 0.9;

  return (
    <Pressable style={[styles.card, { width }]} onPress={onPress}>
      <View style={[styles.imageWrap, { height: imageHeight }]}>
        <Image source={item.image} style={styles.image} />
        <Ionicons style={styles.heart} name="heart" size={24} color={colors.white} />
        <View style={styles.playButton}>
          <Ionicons name="play" size={20} color={colors.primary} />
        </View>
        <View style={styles.viewsRow}>
          <Ionicons name="eye-outline" size={15} color={colors.white} />
          <Text style={styles.viewsText}>{item.views}</Text>
        </View>
      </View>
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.topic}>{item.topic}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 26,
    backgroundColor: colors.white,
  },
  imageWrap: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.cardLight,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heart: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 38,
    height: 38,
    marginTop: -19,
    marginLeft: -19,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  viewsRow: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewsText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
  },
  title: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  topic: {
    marginTop: 3,
    fontSize: 14,
    color: colors.muted,
  },
});

