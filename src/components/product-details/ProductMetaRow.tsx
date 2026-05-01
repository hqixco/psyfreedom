import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

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
      <Ionicons name="star" size={14} color={colors.primary} />
      <Text style={styles.text}>{`${rating} ${reviewsCount} отзывов`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.primaryDark,
  },
});
