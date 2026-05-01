import { StyleSheet, View } from 'react-native';
import { ProductCategory } from '../../data/productsData';
import { ProductCategoryTile } from './ProductCategoryTile';

type ProductCategoryGridProps = {
  categories: ProductCategory[];
  categoryWidth: number;
  onPressCategory: (id: string) => void;
};

export function ProductCategoryGrid({ categories, categoryWidth, onPressCategory }: ProductCategoryGridProps) {
  return (
    <View style={styles.grid}>
      {categories.map((item) => (
        <View key={item.id} style={styles.itemWrap}>
          <ProductCategoryTile item={item} width={categoryWidth} onPress={onPressCategory} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginHorizontal: 16,
    marginTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    columnGap: 8,
    rowGap: 8,
  },
  itemWrap: {},
});
