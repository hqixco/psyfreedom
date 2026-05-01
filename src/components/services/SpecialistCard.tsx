import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
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
  const imageWidth = width - 2;
  const [liked, setLiked] = useState(false);

  return (
    <Pressable style={[styles.card, isTop10 && styles.top10Card, { width }]} onPress={onPress}>
      <View style={[styles.imageWrap, isTop10 && styles.top10ImageWrap, { width: imageWidth, height: imageHeight }]}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Pressable style={styles.heartButton} onPress={() => setLiked((value) => !value)} hitSlop={10}>
          <Ionicons name={liked ? 'heart' : 'heart-outline'} size={20} color={colors.white} />
        </Pressable>
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
    height: 185,
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
  heartButton: {
    position: 'absolute',
    top: 6,
    right: 6,
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
  name: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  specialization: {
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
