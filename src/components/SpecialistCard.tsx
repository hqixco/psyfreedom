import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { FavoriteHeartIcon } from './icons/FavoriteHeartIcon';
import { theme, typography } from '../constants/theme';
import { CatalogSpecialist } from '../data/catalogData';

type SpecialistCardProps = {
  item: Pick<CatalogSpecialist, 'id' | 'name' | 'specialization' | 'price' | 'rating' | 'image'>;
  onPress?: () => void;
};

export function SpecialistCard({ item, onPress }: SpecialistCardProps) {
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
        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.specialization} numberOfLines={1}>
            {item.specialization}
          </Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.heartBadge}
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
    width: 185,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: theme.white,
  },
  imageWrap: {
    height: 185,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heartBadge: {
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
    right: 10,
    bottom: 10,
  },
  ratingText: {
    color: theme.white,
    fontSize: 14,
    ...typography.Inter[400],
  },
  content: {
    paddingTop: 8,
    paddingHorizontal: 2,
  },
  name: {
    fontSize: 14,
    ...typography.Inter[600],
    color: '#064453',
    marginBottom: 3,
  },
  specialization: {
    fontSize: 14,
    color: theme.muted,
    marginBottom: 7,
    ...typography.Inter[400],
  },
  price: {
    fontSize: 16,
    ...typography.Inter[600],
    color: '#008CA3',
  },
});
