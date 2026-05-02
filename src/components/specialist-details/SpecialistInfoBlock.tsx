import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { SpecialistDetails } from '../../data/specialistDetailsData';

type SpecialistInfoBlockProps = {
  specialist: SpecialistDetails;
};

export function SpecialistInfoBlock({ specialist }: SpecialistInfoBlockProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>{specialist.price}</Text>
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
        <Text style={styles.ratingText}>{`${specialist.rating} ${specialist.reviewsCount} отзывов`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 14,
  },
  price: {
    fontSize: 28,
    lineHeight: 34,
    ...typography.Inter[700],
    color: colors.primary,
  },
  name: {
    marginTop: 6,
    fontSize: 24,
    lineHeight: 30,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  role: {
    marginTop: 2,
    fontSize: 16,
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
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EAF8FA',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 13,
    ...typography.Inter[600],
    color: colors.primary,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.muted,
  },
});
