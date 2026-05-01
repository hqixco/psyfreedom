import { StyleSheet, View } from 'react-native';
import { Product } from '../../data/productsData';
import { ProductCard } from './ProductCard';

type ProductsGridProps = {
  products: Product[];
  cardWidth: number;
  onPressProduct: (id: string) => void;
};

export function ProductsGrid({ products, cardWidth, onPressProduct }: ProductsGridProps) {
  return (
    <View style={styles.grid}>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          width={cardWidth}
          imageHeight={180}
          onPress={() => onPressProduct(item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginTop: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
