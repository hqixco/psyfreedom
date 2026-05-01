import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { Product } from '../../data/productsData';
import { ProductCard } from './ProductCard';

type TopProductsSectionProps = {
  products: Product[];
  onPressProduct: (id: string) => void;
};

export function TopProductsSection({ products, onPressProduct }: TopProductsSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Топ-10 товаров</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
        {products.map((item, index) => (
          <View key={item.id} style={index === products.length - 1 ? undefined : styles.itemSpacer}>
            <ProductCard item={item} width={174} imageHeight={180} variant="top10" onPress={() => onPressProduct(item.id)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 26,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: 'rgba(255, 240, 225, 0.56)',
  },
  title: {
    marginHorizontal: 16,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '600',
    color: colors.text,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 2,
  },
  itemSpacer: {
    marginRight: 10,
  },
});
