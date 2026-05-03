import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { ProductDetails } from '../../data/productDetailsData';
import { ProductMetaRow } from './ProductMetaRow';
import { ProductPriceBlock } from './ProductPriceBlock';
import { ProductTags } from './ProductTags';

type ProductHeroProps = {
  product: ProductDetails;
};

export function ProductHero({ product }: ProductHeroProps) {
  const isPromoCode = product.variant === 'promoCode';
  const isCompactHero =
    product.variant === 'promoCode' ||
    product.variant === 'testPaid' ||
    product.variant === 'testFree' ||
    product.variant === 'courseCompact' ||
    product.variant === 'courseFull';

  return (
    <View style={styles.container}>
      <Image source={product.image} style={[styles.image, isCompactHero ? styles.compactImage : null]} resizeMode="cover" />
      <ProductPriceBlock
        price={product.price}
        title={product.title}
        categoryLabel={product.categoryLabel}
        promoBadge={isPromoCode ? undefined : product.promoBadge}
      />
      {isPromoCode ? (
        <View style={styles.validityRow}>
          <Text style={styles.validityLabel}>Срок действия:</Text>
          <View style={styles.validityChip}>
            <Text style={styles.validityValue}>01.02.2025-30.09.2025</Text>
          </View>
        </View>
      ) : (
        <ProductTags tags={product.tags} />
      )}
      <ProductMetaRow rating={product.rating} reviewsCount={product.reviewsCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 370,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
  },
  compactImage: {
    height: 200,
  },
  validityRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  validityLabel: {
    fontSize: 12,
    color: colors.primaryDark,
    ...typography.Inter[400],
  },
  validityChip: {
    minHeight: 18,
    paddingHorizontal: 8,
    borderRadius: 360,
    backgroundColor: '#F5F9FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  validityValue: {
    fontSize: 12,
    color: colors.primaryDark,
    ...typography.Inter[600],
  },
});
