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
      {categories.map((item, index) => (
        <View key={item.id} style={[styles.itemWrap, index % 3 !== 2 && styles.itemGap]}>
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
  },
  itemWrap: {
    marginBottom: 8,
  },
  itemGap: {
    marginRight: 8,
  },
});
