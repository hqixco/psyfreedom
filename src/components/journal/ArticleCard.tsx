import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { Article } from '../../data/journalData';

type ArticleCardProps = {
  item: Article;
  width: number;
  imageHeight?: number;
  onPress: () => void;
};

export function ArticleCard({
  item,
  width,
  imageHeight = 145,
  onPress,
}: ArticleCardProps) {
  const [liked, setLiked] = useState(Boolean(item.isFavorite));

  return (
    <Pressable style={[styles.card, { width }]} onPress={onPress}>
      <View style={[styles.imageWrap, { height: imageHeight }]}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Pressable style={styles.heartButton} onPress={() => setLiked((value) => !value)}>
          <Ionicons name={liked ? 'heart' : 'heart-outline'} size={22} color={colors.white} />
        </Pressable>
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
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.cardLight,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
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
