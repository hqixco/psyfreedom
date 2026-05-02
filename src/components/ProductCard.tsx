import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { FavoriteHeartIcon } from './icons/FavoriteHeartIcon';
import { theme, typography } from '../constants/theme';
import { CatalogProduct } from '../data/catalogData';

type ProductCardProps = {
  item: Pick<CatalogProduct, 'id' | 'title' | 'type' | 'price' | 'rating' | 'image'>;
  onPress?: () => void;
};

export function ProductCard({ item, onPress }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <Pressable onPress={onPress}>
        <View style={styles.imageWrap}>
          <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.image} />
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>{`\u2605 ${item.rating}`}</Text>
          </View>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </Pressable>
      <Pressable
        style={styles.heartButton}
        onPress={() => setLiked((current) => !current)}
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
    width: 180,
    marginRight: 10,
    backgroundColor: theme.white,
  },
  imageWrap: {
    width: 180,
    height: 180,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
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
  ratingBadge: {
    position: 'absolute',
    right: 14,
    bottom: 14,
  },
  ratingText: {
    color: theme.white,
    fontSize: 14,
    ...typography.Inter[600],
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    color: theme.primaryDark,
    ...typography.Inter[700],
  },
  type: {
    marginTop: 2,
    fontSize: 14,
    color: theme.muted,
    ...typography.Inter[400],
  },
  price: {
    marginTop: 8,
    fontSize: 16,
    color: '#008CA3',
    ...typography.Inter[700],
  },
});
