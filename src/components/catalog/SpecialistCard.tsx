import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, typography } from '../../constants/theme';
import { CatalogSpecialist } from '../../data/catalogData';

type SpecialistCardProps = {
  item: CatalogSpecialist;
  width: number;
  onPress?: () => void;
};

export function SpecialistCard({ item, width, onPress }: SpecialistCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable style={[styles.specialistCard, { width }]} onPress={onPress}>
      <View style={styles.imageWrap}>
        <Image source={item.image} style={styles.image} />
        <Pressable style={styles.favoriteButton} onPress={() => setLiked((value) => !value)}>
          <MaterialCommunityIcons name={liked ? 'heart' : 'heart-outline'} size={18} color={liked ? colors.pink : colors.white} />
        </Pressable>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.specialization} numberOfLines={1}>{item.specialization}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  specialistCard: {
    marginBottom: 18,
  },
  imageWrap: {
    height: 150,
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
    right: 8,
    bottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: 'rgba(4,63,74,0.45)',
  },
  ratingText: {
    fontSize: 12,
    ...typography.Inter[700],
    color: colors.white,
  },
  name: {
    marginTop: 8,
    fontSize: 14,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  specialization: {
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
