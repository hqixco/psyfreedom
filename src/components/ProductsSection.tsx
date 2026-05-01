import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme, typography } from '../constants/theme';
import { products } from '../data/catalogData';
import { ProductCard } from './ProductCard';

const productSnapInterval = 190;

type ProductsSectionProps = {
  onOpenProductDetails?: (productId: string) => void;
};

const homeProducts = products.filter((product) =>
  ['product-1', 'product-2', 'product-6', 'product-9'].includes(product.id)
);

export function ProductsSection({ onOpenProductDetails }: ProductsSectionProps) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Товары</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ещё</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        snapToInterval={productSnapInterval}
        snapToAlignment="start"
      >
        {homeProducts.map((product, index) => (
          <View key={product.id} style={index === homeProducts.length - 1 ? styles.lastCard : undefined}>
            <ProductCard item={product} onPress={() => onOpenProductDetails?.(product.id)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 34,
    marginHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: theme.text,
    ...typography.Inter[600],
  },
  button: {
    height: 32,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 18,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.white,
  },
  buttonText: {
    color: '#8A8A8A',
    fontSize: 14,
    ...typography.Inter[400],
  },
  list: {
    marginTop: 18,
  },
  listContent: {
    paddingHorizontal: 18,
  },
  lastCard: {
    paddingRight: 18,
  },
});
