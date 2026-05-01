import { StyleSheet, View } from 'react-native';
import { JournalCategory } from '../../data/journalData';
import { JournalCategoryTile } from './JournalCategoryTile';

type JournalCategoryGridProps = {
  categories: JournalCategory[];
  categoryWidth: number;
  onPressCategory: (id: string) => void;
};

export function JournalCategoryGrid({
  categories,
  categoryWidth,
  onPressCategory,
}: JournalCategoryGridProps) {
  return (
    <View style={styles.grid}>
      {categories.map((item) => (
        <View key={item.id} style={styles.cell}>
          <JournalCategoryTile item={item} width={categoryWidth} onPress={() => onPressCategory(item.id)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cell: {
    marginBottom: 8,
  },
});
