import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type ProductPriceBlockProps = {
  price: string;
  title: string;
  categoryLabel: string;
  promoBadge?: string;
};

export function ProductPriceBlock({
  price,
  title,
  categoryLabel,
  promoBadge,
}: ProductPriceBlockProps) {
  return (
    <View>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>{categoryLabel}</Text>
      {promoBadge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{promoBadge}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  price: {
    marginTop: 16,
    fontSize: 24,
    lineHeight: 34,
    ...typography.Inter[600],
    color: colors.primary,
  },
  title: {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 30,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  category: {
    marginTop: 4,
    fontSize: 14,
    color: colors.muted,
  },
  badge: {
    alignSelf: 'flex-start',
    marginTop: 8,
    height: 28,
    paddingHorizontal: 12,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE9EF',
  },
  badgeText: {
    fontSize: 12,
    ...typography.Inter[400],
    color: '#FF5F7D',
  },
});
