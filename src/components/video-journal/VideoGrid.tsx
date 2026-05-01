import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { VideoJournalItem } from '../../data/videoJournalData';
import { VideoCard } from './VideoCard';

type VideoGridProps = {
  items: VideoJournalItem[];
  onPressItem: (item: VideoJournalItem) => void;
};

export function VideoGrid({ items, onPressItem }: VideoGridProps) {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 16 * 2 - 10) / 2;

  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <VideoCard key={item.id} item={item} width={cardWidth} onPress={() => onPressItem(item)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginTop: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

