import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { SpecialistDetails } from '../../data/specialistDetailsData';

const priceBadges = require('../../../assets/specialist-price-badges.svg');

type SpecialistInfoBlockProps = {
  specialist: SpecialistDetails;
};

export function SpecialistInfoBlock({ specialist }: SpecialistInfoBlockProps) {
  return (
    <View style={styles.container}>
      <View style={styles.priceRow}>
        <Text style={styles.price}>{specialist.price}</Text>
        <Image source={priceBadges} style={styles.priceBadges} resizeMode="contain" />
      </View>
      <Text style={styles.name}>{specialist.name}</Text>
      <Text style={styles.role}>{specialist.specialization}</Text>
      <Text style={styles.meta}>{`Опыт работы: ${specialist.experience}`}</Text>
      <Text style={styles.city}>{`г. ${specialist.city}`}</Text>

      <View style={styles.tagsRow}>
        {specialist.tags.map((tag) => (
          <View key={tag} style={styles.tagChip}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <View style={styles.ratingRow}>
        <Ionicons name="star" size={18} color="#FFC93C" />
        <Text style={styles.ratingValue}>{specialist.rating}</Text>
        <Text style={styles.reviewsText}>{`${specialist.reviewsCount} отзывов`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 14,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 24,
    lineHeight: 34,
    ...typography.Inter[600],
    color: colors.primary,
  },
  priceBadges: {
    width: 40,
    height: 18,
    marginTop: 8,
    flexShrink: 0,
  },
  name: {
    marginTop: 6,
    fontSize: 20,
    lineHeight: 30,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  role: {
    marginTop: 2,
    fontSize: 14,
    color: colors.muted,
  },
  meta: {
    marginTop: 8,
    fontSize: 14,
    color: colors.primaryDark,
  },
  city: {
    marginTop: 4,
    fontSize: 14,
    color: colors.primaryDark,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tagChip: {
    height: 18,
    borderRadius: 14,
    backgroundColor: '#EAF8FA',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingValue: {
    marginLeft: 6,
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  reviewsText: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.muted,
  },
});
