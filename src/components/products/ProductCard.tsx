import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { Product } from '../../data/productsData';

type ProductCardProps = {
  item: Product;
  width: number;
  imageHeight: number;
  onPress: () => void;
  variant?: 'default' | 'top10';
};

export function ProductCard({ item, width, imageHeight, onPress, variant = 'default' }: ProductCardProps) {
  const isTop10 = variant === 'top10';
  const imageWidth = width - 2;

  return (
    <Pressable style={[styles.card, isTop10 && styles.top10Card, { width }]} onPress={onPress}>
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
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 18,
    backgroundColor: colors.white,
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
    fontWeight: '400',
    color: colors.white,
  },
  title: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  type: {
    marginTop: 2,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: colors.muted,
  },
  price: {
    marginTop: 3,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    color: colors.primary,
  },
  top10Price: {
    marginTop: 'auto',
  },
});
