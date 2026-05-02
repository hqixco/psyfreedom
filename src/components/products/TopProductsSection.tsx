import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { Product } from '../../data/productsData';
import { ProductCard } from './ProductCard';

type TopProductsSectionProps = {
  products: Product[];
  onPressProduct: (id: string) => void;
  favoriteMap: Record<string, boolean>;
  onToggleFavorite: (id: string) => void;
};

export function TopProductsSection({ products, onPressProduct, favoriteMap, onToggleFavorite }: TopProductsSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Топ-10 товаров</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
        {products.map((item, index) => (
          <View key={item.id} style={index === products.length - 1 ? undefined : styles.itemSpacer}>
            <ProductCard
              item={item}
              width={174}
              imageHeight={180}
              variant="top10"
              isFavorite={favoriteMap[item.id] ?? false}
              onToggleFavorite={() => onToggleFavorite(item.id)}
              onPress={() => onPressProduct(item.id)}
            />
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
    paddingBottom: 10,
    backgroundColor: 'rgba(255, 240, 225, 0.56)',
  },
  title: {
    marginHorizontal: 16,
    fontSize: 20,
    lineHeight: 30,
    ...typography.Inter[600],
    color: colors.text,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 2,
  },
  itemSpacer: {
    marginRight: 8,
  },
});
