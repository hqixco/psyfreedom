import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProductCard } from '../products/ProductCard';
import { colors, typography } from '../../constants/theme';
import { SpecialistProduct } from '../../data/specialistDetailsData';
import { Product } from '../../data/productsData';

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
        <Pressable onPress={onPressAll}>
          <Text style={styles.allText}>Все</Text>
        </Pressable>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item as Product}
            width={180}
            imageHeight={182}
            onPress={() => onPressProduct(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 30,
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  allText: {
    fontSize: 14,
    ...typography.Inter[700],
    color: colors.primary,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 12,
    columnGap: 10,
  },
});
