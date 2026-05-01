import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { Video } from '../../data/journalData';

type VideoCardProps = {
  item: Video;
  width: number;
  onPress: () => void;
};

export function VideoCard({ item, width, onPress }: VideoCardProps) {
  return (
    <Pressable style={[styles.card, { width }]} onPress={onPress}>
      <View style={styles.imageWrap}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <View style={styles.playWrap}>
          <Ionicons name="play" size={20} color={colors.white} />
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
    backgroundColor: colors.white,
  },
  imageWrap: {
    height: 145,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.cardLight,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  playWrap: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 42,
    height: 42,
    marginTop: -21,
    marginLeft: -21,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.28)',
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
    fontSize: 13,
    color: colors.white,
    fontWeight: '600',
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  topic: {
    marginTop: 3,
    fontSize: 14,
    color: colors.muted,
  },
});
