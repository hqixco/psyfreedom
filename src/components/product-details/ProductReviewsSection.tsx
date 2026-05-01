import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { Review } from '../../data/productDetailsData';

type ProductReviewsSectionProps = {
  rating?: string;
  reviewsCount?: number;
  reviews?: Review[];
  onOpenReview: () => void;
};

export function ProductReviewsSection({ rating, reviewsCount, reviews, onOpenReview }: ProductReviewsSectionProps) {
  if (!reviews?.length) {
    return null;
  }

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>Отзывы</Text>
        {rating && typeof reviewsCount === 'number' ? (
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#FFC93C" />
            <Text style={styles.ratingText}>{`${rating} ${reviewsCount} отзывов`}</Text>
          </View>
        ) : null}
      </View>

      {reviews.map((review) => {
        const reviewRating = 'rating' in review && typeof review.rating === 'number' ? review.rating : 5;

        return (
          <View key={review.id} style={styles.card}>
            <View style={styles.cardTop}>
              {review.avatar ? <Image source={review.avatar} style={styles.avatar} /> : null}
              <View style={styles.meta}>
                <Text style={styles.date}>{review.date}</Text>
                <Text style={styles.author}>{review.author}</Text>
                <View style={styles.starsRow}>
                  {Array.from({ length: reviewRating }).map((_, index) => (
                    <Ionicons key={`${review.id}-${index}`} name="star" size={14} color="#FFC93C" />
                  ))}
                </View>
              </View>
            </View>
            <Text style={styles.text}>{review.text}</Text>
          </View>
        );
      })}

      <Pressable style={styles.button} onPress={onOpenReview}>
        <Text style={styles.buttonText}>Оставить отзыв</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 28,
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.muted,
  },
  card: {
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: colors.white,
    padding: 14,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    backgroundColor: colors.cardLight,
  },
  meta: {
    flex: 1,
  },
  date: {
    fontSize: 12,
    color: colors.muted,
  },
  author: {
    marginTop: 2,
    fontSize: 15,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  starsRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
  button: {
    marginHorizontal: 16,
    marginTop: 14,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.primary,
  },
});
