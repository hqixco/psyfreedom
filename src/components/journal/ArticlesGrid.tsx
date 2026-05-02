import { StyleSheet, View } from 'react-native';
import { Article } from '../../data/journalData';
import { ArticleCard } from './ArticleCard';

type ArticlesGridProps = {
  articles: Article[];
  cardWidth: number;
  onPressArticle: (id: string) => void;
};

export function ArticlesGrid({ articles, cardWidth, onPressArticle }: ArticlesGridProps) {
  return (
    <View style={styles.grid}>
      {articles.map((item) => (
        <View key={item.id} style={styles.cardWrap}>
          <ArticleCard
            item={item}
            width={cardWidth}
            imageHeight={180}
            onPress={() => onPressArticle(item.id)}
          />
        </View>
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
  cardWrap: {
    marginBottom: 10,
  },
});
