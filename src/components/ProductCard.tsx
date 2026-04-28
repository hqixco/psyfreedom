import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme, typography } from '../constants/theme';
import { ProductItem } from '../data/mockData';

type ProductCardProps = {
  item: ProductItem;
};

export function ProductCard({ item }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.image} />
        <Pressable style={styles.heartButton} onPress={() => setLiked((current) => !current)} hitSlop={10}>
          <HeartIcon liked={liked} />
        </Pressable>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>{`\u2605 ${item.rating}`}</Text>
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
}

function HeartIcon({ liked }: { liked: boolean }) {
  if (liked) {
    return (
      <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
          fill={theme.pink}
        />
      </Svg>
    );
  }

  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.62 20.55C12.28 20.67 11.72 20.67 11.38 20.55C8.48 19.56 2 15.43 2 8.43C2 5.34 4.49 2.84 7.56 2.84C9.38 2.84 10.99 3.72 12 5.08C13.01 3.72 14.63 2.84 16.44 2.84C19.51 2.84 22 5.34 22 8.43C22 15.43 15.52 19.56 12.62 20.55Z"
        stroke={theme.white}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  card: {
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
    top: 8,
    right: 8,
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
