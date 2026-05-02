import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FavoriteHeartIcon } from '../icons/FavoriteHeartIcon';
import { colors, typography } from '../../constants/theme';
import { CatalogArticle } from '../../data/catalogData';

type ArticleCardProps = {
  item: CatalogArticle;
  width: number;
  onPress?: () => void;
};

export function ArticleCard({ item, width, onPress }: ArticleCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={[styles.articleCard, { width }]}>
      <Pressable onPress={onPress}>
        <View style={[styles.imageWrap, { height: width }]}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.viewsRow}>
            <MaterialCommunityIcons name="eye-outline" size={15} color={colors.white} />
            <Text style={styles.viewsText}>{item.views}</Text>
          </View>
        </View>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.topic}</Text>
      </Pressable>
      <Pressable
        style={styles.favoriteButton}
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
  articleCard: {
    position: 'relative',
    marginBottom: 18,
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
  favoriteButton: {
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
    right: 8,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewsText: {
    marginLeft: 4,
    fontSize: 12,
    color: colors.white,
    ...typography.Inter[600],
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: colors.muted,
  },
});
