import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { AssociationReview } from '../../data/associationsData';

export function AssociationReviewCard({ review }: { review: AssociationReview }) {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>{review.date}</Text>
      <Text style={styles.author}>{review.author}</Text>
      <View style={styles.ratingRow}>
        <Ionicons name="star" size={16} color="#FFC93C" />
        <Text style={styles.rating}>{review.rating.toFixed(1)}</Text>
      </View>
      <Text style={styles.text}>{review.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: colors.white,
  },
  date: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.muted,
  },
  author: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  ratingRow: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
});
