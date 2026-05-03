import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { FavoriteItem } from '../../data/favoritesData';
import { FavoriteCard } from './FavoriteCard';

type FavoritesGridProps = {
  items: FavoriteItem[];
  onPressItem: (item: FavoriteItem) => void;
  onToggleHeart: (id: string) => void;
  heartMutedMap: Record<string, boolean>;
};

export function FavoritesGrid({ items, onPressItem, onToggleHeart, heartMutedMap }: FavoritesGridProps) {
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
          isHeartMuted={heartMutedMap[item.id] ?? false}
          onToggleHeart={onToggleHeart}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginHorizontal: 16,
    marginTop: 22,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
