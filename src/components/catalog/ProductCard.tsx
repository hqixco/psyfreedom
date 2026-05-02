import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, typography } from '../../constants/theme';
import { CatalogProduct } from '../../data/catalogData';

type ProductCardProps = {
  item: CatalogProduct;
  width: number;
  onPress?: () => void;
};

export function ProductCard({ item, width, onPress }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable style={[styles.productCard, { width }]} onPress={onPress}>
      <View style={[styles.imageWrap, { height: width }]}>
        <Image source={item.image} style={styles.image} />
        <Pressable style={styles.favoriteButton} onPress={() => setLiked((value) => !value)}>
          <MaterialCommunityIcons name={liked ? 'heart' : 'heart-outline'} size={18} color={liked ? colors.pink : colors.white} />
        </Pressable>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  productCard: {
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
  },
  ratingBadge: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'rgba(4,63,74,0.45)',
  },
  ratingText: {
    fontSize: 12,
    color: colors.white,
    ...typography.Inter[700],
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  type: {
    marginTop: 4,
    fontSize: 13,
    color: colors.muted,
  },
  price: {
    marginTop: 6,
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primary,
  },
});
