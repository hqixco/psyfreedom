import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { Association } from '../../data/associationsData';
import { AssociationReviewCard } from './AssociationReviewCard';

export function AssociationReviewsSection({ association }: { association: Association }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Отзывы</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#FFC93C" />
          <Text style={styles.ratingText}>
            {association.specialist.rating} {association.specialist.reviewsCount} отзывов
          </Text>
        </View>
      </View>

      {association.reviews.map((review) => (
        <AssociationReviewCard key={review.id} review={review} />
      ))}

      <Pressable style={styles.button} onPress={() => console.log('leave association review')}>
        <Text style={styles.buttonText}>Оставить отзыв</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 34,
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  title: {
    fontSize: 24,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.primaryDark,
  },
  button: {
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 24,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.primary,
    fontSize: 15,
    ...typography.Inter[700],
  },
});
