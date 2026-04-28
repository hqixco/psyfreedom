import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { theme, typography } from '../constants/theme';
import { articles } from '../data/mockData';
import { ArticleCard } from './ArticleCard';

const articleSnapInterval = 190;

export function ArticlesSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Статьи</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ещё</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        snapToInterval={articleSnapInterval}
        snapToAlignment="start"
      >
        {articles.map((article, index) => (
          <View key={article.id} style={index === articles.length - 1 ? styles.lastCard : undefined}>
            <ArticleCard item={article} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    color: theme.text,
    ...typography.Inter[700],
  },
  button: {
    height: 32,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 18,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.white,
  },
  buttonText: {
    color: '#8A8A8A',
    fontSize: 14,
    ...typography.Inter[400],
  },
  list: {
    marginTop: 24,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  lastCard: {
    paddingRight: 16,
  },
});
