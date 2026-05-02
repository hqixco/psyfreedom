import { ScrollView, StyleSheet, Text } from 'react-native';
import { ProductCard } from '../products/ProductCard';
import { ProductSummary } from '../../data/productDetailsData';
import { Product } from '../../data/productsData';
import { colors, typography } from '../../constants/theme';

type ProductRelatedSectionProps = {
  items?: ProductSummary[];
  onPressItem: (id: string) => void;
};

export function ProductRelatedSection({
  items,
  onPressItem,
}: ProductRelatedSectionProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <>
      <Text style={styles.title}>Похожие товары</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            item={item as Product}
            width={160}
            imageHeight={90}
            onPress={() => onPressItem(item.id)}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 28,
    marginHorizontal: 16,
    fontSize: 20,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
});
