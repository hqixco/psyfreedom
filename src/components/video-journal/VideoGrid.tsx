import { StyleSheet, View } from 'react-native';
import { VideoJournalItem } from '../../data/videoJournalData';
import { VideoCard } from './VideoCard';

type VideoGridProps = {
  items: VideoJournalItem[];
  onPressItem: (item: VideoJournalItem) => void;
  cardWidth: number;
};

export function VideoGrid({ items, onPressItem, cardWidth }: VideoGridProps) {
  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <View key={item.id} style={styles.cardWrap}>
          <VideoCard item={item} width={cardWidth} onPress={() => onPressItem(item)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginTop: 10,
    marginHorizontal: 16,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrap: {
    marginBottom: 10,
  },
});
