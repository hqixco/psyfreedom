import { ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { UniversalFilterSheet } from '../../components/filters/UniversalFilterSheet';
import { ArticleCard } from '../../components/journal/ArticleCard';
import { ArticlesGrid } from '../../components/journal/ArticlesGrid';
import { ArticlesToolbar } from '../../components/journal/ArticlesToolbar';
import { JournalHeader } from '../../components/journal/JournalHeader';
import { JournalHelpBanner } from '../../components/journal/JournalHelpBanner';
import { PopularArticleTopics } from '../../components/journal/PopularArticleTopics';
import { colors } from '../../constants/theme';
import { articlesFilterConfig, defaultProductFilters, SelectedFilters } from '../../data/filterData';
import { Article, ArticleTopic } from '../../data/journalData';

type ArticlesScreenProps = {
  bottomTabsHeight: number;
  articles: Article[];
  topics: ArticleTopic[];
  selectedFilters: SelectedFilters;
  isFilterOpen: boolean;
  onBack: () => void;
  onSearch: () => void;
  onOpenFilter: () => void;
  onCloseFilter: () => void;
  onApplyFilters: (filters: SelectedFilters) => void;
  onResetFilters: () => void;
  onChangeFilters: (filters: SelectedFilters) => void;
  onPressTopic: (id: string) => void;
  onPressBanner: () => void;
  onPressArticle: (id: string) => void;
};

export function ArticlesScreen({
  bottomTabsHeight,
  articles,
  topics,
  selectedFilters,
  isFilterOpen,
  onBack,
  onSearch,
  onOpenFilter,
  onCloseFilter,
  onApplyFilters,
  onResetFilters,
  onChangeFilters,
  onPressTopic,
  onPressBanner,
  onPressArticle,
}: ArticlesScreenProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const cardWidth = (width - 16 * 2 - 10) / 2;
  const featuredWidth = 180;
  const featuredArticles = articles.slice(0, 5);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: 100 + bottomTabsHeight + insets.bottom }]}
      >
        <JournalHeader title="Статьи" onBack={onBack} onSearch={onSearch} />

        <JournalHelpBanner onPress={onPressBanner} />

        <PopularArticleTopics topics={topics} onPressTopic={onPressTopic} />

        <Text style={styles.sectionTitle}>Популярные темы статей</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {featuredArticles.map((item) => (
            <ArticleCard key={item.id} item={item} width={featuredWidth} onPress={() => onPressArticle(item.id)} />
          ))}
        </ScrollView>

        <ArticlesToolbar onOpenFilter={onOpenFilter} />

        <ArticlesGrid articles={articles} cardWidth={cardWidth} onPressArticle={onPressArticle} />
      </ScrollView>

      <UniversalFilterSheet
        visible={isFilterOpen}
        onClose={onCloseFilter}
        onApply={onApplyFilters}
        onReset={onResetFilters}
        config={articlesFilterConfig}
        selectedFilters={selectedFilters}
        onChangeFilters={onChangeFilters}
      />
    </SafeAreaView>
  );
}

export const defaultArticlesFilters = defaultProductFilters;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingTop: 0,
  },
  sectionTitle: {
    marginTop: 24,
    marginHorizontal: 16,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: colors.text,
  },
  horizontalList: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
});
