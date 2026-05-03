import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { FavoriteHeartIcon } from '../icons/FavoriteHeartIcon';
import { colors, typography } from '../../constants/theme';
import { Product } from '../../data/productsData';

type ProductCardProps = {
  item: Product;
  width: number;
  imageHeight: number;
  onPress: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  showFavoriteButton?: boolean;
  variant?: 'default' | 'top10';
};

export function ProductCard({
  item,
  width,
  imageHeight,
  onPress,
  isFavorite = false,
  onToggleFavorite,
  showFavoriteButton = Boolean(onToggleFavorite),
  variant = 'default',
}: ProductCardProps) {
  const [localFavorite, setLocalFavorite] = useState(false);
  const isTop10 = variant === 'top10';
  const imageWidth = width - 2;
  const favoriteFilled = onToggleFavorite ? isFavorite : localFavorite;

  const handleToggleFavorite = () => {
    if (onToggleFavorite) {
      onToggleFavorite();
      return;
    }

    setLocalFavorite((current) => !current);
  };

  return (
    <View style={[styles.card, isTop10 && styles.top10Card, { width }]}>
      <Pressable onPress={onPress} style={styles.cardPressable}>
        <View style={[styles.imageWrap, isTop10 && styles.top10ImageWrap, { width: imageWidth, height: imageHeight }]}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={12} color={colors.white} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        <View style={isTop10 ? styles.top10Content : undefined}>
          <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={[styles.price, isTop10 && styles.top10Price]}>{item.price}</Text>
        </View>
      </Pressable>
      {showFavoriteButton ? (
        <Pressable
          style={styles.favoriteButton}
          onPress={handleToggleFavorite}
          hitSlop={8}
          android_ripple={{ color: 'transparent' }}
        >
          <FavoriteHeartIcon filled={favoriteFilled} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginBottom: 18,
    backgroundColor: colors.white,
  },
  cardPressable: {
    flex: 1,
  },
  top10Card: {
    height: 290,
    borderWidth: 1,
    borderColor: 'rgba(255, 154, 79, 1)',
    borderRadius: 12,
  },
  imageWrap: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.cardLight,
  },
  top10ImageWrap: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  top10Content: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 10,
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
  ratingRow: {
    position: 'absolute',
    right: 6,
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 3,
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.white,
  },
  title: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  type: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[400],
    color: colors.muted,
  },
  price: {
    marginTop: 5,
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[600],
    color: colors.primary,
  },
  top10Price: {
    marginTop: 'auto',
  },
});
