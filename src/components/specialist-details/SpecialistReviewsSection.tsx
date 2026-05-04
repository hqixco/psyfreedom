import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { SpecialistReview } from '../../data/specialistDetailsData';
import { RatingStarIcon } from '../icons/RatingStarIcon';

type SpecialistReviewsSectionProps = {
  rating: string;
  reviewsCount: number;
  reviews: SpecialistReview[];
  onOpenReview: () => void;
};

export function SpecialistReviewsSection({
  rating,
  reviewsCount,
  reviews,
  onOpenReview,
}: SpecialistReviewsSectionProps) {
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>Отзывы</Text>
        <View style={styles.ratingRow}>
          <RatingStarIcon />
          <Text style={styles.ratingValue}>{rating}</Text>
          <Text style={styles.reviewsValue}>{`${reviewsCount} отзывов`}</Text>
        </View>
      </View>

      {reviews.map((review) => (
        <View key={review.id} style={styles.card}>
          <View style={styles.cardTop}>
            <Image source={review.avatar} style={styles.avatar} />
            <View style={styles.meta}>
              <View style={styles.starsRow}>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <RatingStarIcon key={`${review.id}-${index}`} size={18} />
                ))}
              </View>
              <Text style={styles.date}>{review.date}</Text>
              <Text style={styles.author}>{review.author}</Text>
            </View>
          </View>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      ))}

      <Pressable style={styles.button} onPress={onOpenReview}>
        <Text style={styles.buttonText}>Оставить отзыв</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 60,
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingValue: {
    marginLeft: 3,
    fontSize: 14,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  reviewsValue: {
    marginLeft: 7,
    fontSize: 14,
    fontWeight: '400',
    color: '#A9A9A9',
  },
  card: {
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: colors.white,
    padding: 17,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 360,
    marginRight: 12,
    backgroundColor: colors.cardLight,
  },
  meta: {
    flex: 1,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 2,
  },
  date: {
    marginTop: 4,
    fontSize: 12,
    color: colors.muted,
  },
  author: {
    marginTop: 10,
    fontSize: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  text: {
    marginTop: 13,
    fontSize: 14,
    lineHeight: 16,
    color: colors.text,
  },
  button: {
    marginHorizontal: 16,
    marginTop: 20,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    ...typography.Inter[600],
    color: '#033542',
  },
});
