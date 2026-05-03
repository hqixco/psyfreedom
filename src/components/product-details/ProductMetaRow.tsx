import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { RatingStarIcon } from '../icons/RatingStarIcon';

type ProductMetaRowProps = {
  rating?: string;
  reviewsCount?: number;
};

export function ProductMetaRow({ rating, reviewsCount }: ProductMetaRowProps) {
  if (!rating || typeof reviewsCount !== 'number') {
    return null;
  }

  return (
    <View style={styles.row}>
      <RatingStarIcon />
      <Text style={styles.rating}>{rating}</Text>
      <Text style={styles.reviews}>{`${reviewsCount} отзывов`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 3,
    fontSize: 14,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  reviews: {
    marginLeft: 7,
    fontSize: 14,
    fontWeight: '400',
    color: '#A9A9A9',
  },
});
