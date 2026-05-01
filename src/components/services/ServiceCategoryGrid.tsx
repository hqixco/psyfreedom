import { StyleSheet, View } from 'react-native';
import { ServiceCategory } from '../../data/servicesData';
import { ServiceCategoryTile } from './ServiceCategoryTile';

type ServiceCategoryGridProps = {
  categories: ServiceCategory[];
  categoryWidth: number;
  onPressCategory: (id: string) => void;
};

export function ServiceCategoryGrid({ categories, categoryWidth, onPressCategory }: ServiceCategoryGridProps) {
  return (
    <View style={styles.grid}>
      {categories.map((item) => (
        <View key={item.id} style={styles.itemWrap}>
          <ServiceCategoryTile item={item} width={categoryWidth} onPress={onPressCategory} />
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
    justifyContent: 'space-between',
  },
  itemWrap: {
    marginBottom: 8,
  },
});
