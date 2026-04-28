import { Dimensions, StyleSheet, View } from 'react-native';
import { specialistCategories } from '../data/mockData';
import { CategoryTile } from './CategoryTile';

const screenWidth = Dimensions.get('window').width;
const tileWidth = (screenWidth - 16 * 2 - 8) / 2;

export function CategoryGrid() {
  return (
    <View style={styles.grid}>
      {specialistCategories.map((item) => (
        <CategoryTile key={item.id} item={item} width={tileWidth} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginTop: 18,
    marginHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
