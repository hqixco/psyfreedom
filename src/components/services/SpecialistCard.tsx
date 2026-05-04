import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { FavoriteHeartIcon } from '../icons/FavoriteHeartIcon';
import { colors, typography } from '../../constants/theme';
import { Specialist } from '../../data/servicesData';

type SpecialistCardProps = {
  item: Specialist;
  width: number;
  imageHeight: number;
  onPress: () => void;
  variant?: 'default' | 'top10';
};

export function SpecialistCard({ item, width, imageHeight, onPress, variant = 'default' }: SpecialistCardProps) {
  const isTop10 = variant === 'top10';
  const imageWidth = isTop10 ? '100%' : width - 2;
  const [liked, setLiked] = useState(false);

  return (
    <View style={[styles.card, isTop10 && styles.top10Card, { width }]}>
      <Pressable onPress={onPress}>
        <View style={[styles.imageWrap, isTop10 && styles.top10ImageWrap, { width: imageWidth, height: imageHeight }]}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={12} color={colors.white} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        <View style={isTop10 ? styles.top10Content : undefined}>
          <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
          <Text style={styles.specialization}>{item.specialization}</Text>
          <Text style={[styles.price, isTop10 && styles.top10Price]}>{item.price}</Text>
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
  top10Card: {
    borderWidth: 1,
    borderColor: 'rgba(255, 154, 79, 1)',
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageWrap: {
    height: 185,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.cardLight,
  },
  top10ImageWrap: {
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
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
  name: {
    marginTop: 11,
    marginBottom: 5,
    fontSize: 14,
    lineHeight: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  specialization: {
    marginTop: 3,
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[400],
    color: colors.muted,
  },
  price: {
    marginTop: 6,
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[600],
    color: colors.primary,
  },
});
