import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { FavoriteItem } from '../../data/favoritesData';
import { FavoriteCard } from './FavoriteCard';

type FavoritesGridProps = {
  items: FavoriteItem[];
  onPressItem: (item: FavoriteItem) => void;
  onRemoveItem: (id: string) => void;
};

export function FavoritesGrid({ items, onPressItem, onRemoveItem }: FavoritesGridProps) {
  const { width } = useWindowDimensions();
  const cardGap = 10;
  const cardWidth = (width - 16 * 2 - cardGap) / 2;

  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <FavoriteCard
          key={item.id}
          item={item}
          width={cardWidth}
          onPress={onPressItem}
          onRemove={onRemoveItem}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginHorizontal: 16,
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
