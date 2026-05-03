import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProductCard } from '../products/ProductCard';
import { colors, typography } from '../../constants/theme';
import { SpecialistProduct } from '../../data/specialistDetailsData';
import { Product, products as catalogProducts } from '../../data/productsData';

type SpecialistProductsPreviewProps = {
  products: SpecialistProduct[];
  onPressAll: () => void;
  onPressProduct: (id: string) => void;
};

export function SpecialistProductsPreview({
  products,
  onPressAll,
  onPressProduct,
}: SpecialistProductsPreviewProps) {
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>Товары специалиста</Text>
        <Pressable style={styles.allButton} onPress={onPressAll}>
          <Text style={styles.allButtonText}>Еще</Text>
        </Pressable>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
        {products.map((item) => {
          const actualProduct = catalogProducts.find((catalogItem) => catalogItem.id === item.id);
          const resolvedProduct = (actualProduct ?? item) as Product;

          return (
            <ProductCard
              key={item.id}
              item={resolvedProduct}
              width={180}
              imageHeight={182}
              showFavoriteButton
              onPress={() => onPressProduct(item.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 60,
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 7,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  allButton: {
    height: 32,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 18,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  allButtonText: {
    fontSize: 14,
    ...typography.Inter[400],
    color: '#8A8A8A',
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 12,
    columnGap: 10,
  },
});
