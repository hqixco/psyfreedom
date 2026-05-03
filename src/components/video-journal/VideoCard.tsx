import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { VideoJournalItem } from '../../data/videoJournalData';

type VideoCardProps = {
  item: VideoJournalItem;
  width: number;
  onPress: () => void;
};

export function VideoCard({ item, width, onPress }: VideoCardProps) {
  const [isFavorite, setIsFavorite] = useState(Boolean(item.isFavorite));
  const imageHeight = width * 0.9;

  return (
    <Pressable style={[styles.card, { width }]} onPress={onPress}>
      <View style={[styles.imageWrap, { height: imageHeight }]}>
        <Image source={item.image} style={styles.image} />
        <Pressable
          style={styles.heartButton}
          onPress={() => setIsFavorite((value) => !value)}
          hitSlop={8}
        >
          <Ionicons name="heart" size={24} color={isFavorite ? '#FF2F72' : colors.white} />
        </Pressable>
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
    width: 180,
    marginBottom: 16,
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
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
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
    ...typography.Inter[600],
    color: colors.white,
  },
  title: {
    marginTop: 11,
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  topic: {
    marginTop: 1,
    fontSize: 14,
    color: colors.muted,
  },
});
