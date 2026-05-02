import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FavoriteHeartIcon } from '../icons/FavoriteHeartIcon';
import { colors, typography } from '../../constants/theme';
import { Article } from '../../data/journalData';

type ArticleCardProps = {
  item: Article;
  width: number;
  imageHeight?: number;
  onPress: () => void;
  variant?: 'default' | 'featured';
};

export function ArticleCard({
  item,
  width,
  imageHeight = 145,
  onPress,
  variant = 'default',
}: ArticleCardProps) {
  const isFeatured = variant === 'featured';
  const [liked, setLiked] = useState(Boolean(item.isFavorite));

  return (
    <View style={[styles.card, isFeatured && styles.featuredCard, { width }]}>
      <Pressable onPress={onPress}>
        <View style={[styles.imageWrap, isFeatured && styles.featuredImageWrap, { height: imageHeight }]}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
          <View style={styles.viewsRow}>
            <Ionicons name="eye-outline" size={15} color={colors.white} />
            <Text style={styles.viewsText}>{item.views}</Text>
          </View>
        </View>
        <View style={isFeatured ? styles.featuredContent : undefined}>
          <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.topic}>{item.topic}</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.heartButton}
        onPress={() => setLiked((value) => !value)}
        hitSlop={10}
        android_ripple={{ color: 'transparent' }}
      >
        <FavoriteHeartIcon filled={liked} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginBottom: 18,
    backgroundColor: colors.white,
  },
  featuredCard: {
    borderWidth: 1,
    borderColor: 'rgba(255, 154, 79, 1)',
    borderRadius: 12,
  },
  imageWrap: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.cardLight,
  },
  featuredImageWrap: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  featuredContent: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heartButton: {
    position: 'absolute',
    top: 11,
    right: 11,
    zIndex: 3,
    elevation: 3,
    width: 20,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewsRow: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewsText: {
    marginLeft: 4,
    fontSize: 13,
    color: colors.white,
    ...typography.Inter[600],
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 17,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  topic: {
    marginTop: 3,
    fontSize: 14,
    color: colors.muted,
  },
});
