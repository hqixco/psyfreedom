import { Image, StyleSheet, View } from 'react-native';
import { ProductDetails } from '../../data/productDetailsData';
import { colors } from '../../constants/theme';
import { ProductMetaRow } from './ProductMetaRow';
import { ProductPriceBlock } from './ProductPriceBlock';
import { ProductTags } from './ProductTags';

type ProductHeroProps = {
  product: ProductDetails;
};

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} resizeMode="cover" />
      <ProductPriceBlock
        price={product.price}
        title={product.title}
        categoryLabel={product.categoryLabel}
        promoBadge={product.promoBadge}
      />
      <ProductTags tags={product.tags} />
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
    height: 228,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
  },
});
