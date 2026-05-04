import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { UniversalFilterSheet } from '../../components/filters/UniversalFilterSheet';
import { ArticleCard } from '../../components/journal/ArticleCard';
import { ArticlesGrid } from '../../components/journal/ArticlesGrid';
import { ArticlesToolbar } from '../../components/journal/ArticlesToolbar';
import { JournalHeader } from '../../components/journal/JournalHeader';
import { JournalHelpBanner } from '../../components/journal/JournalHelpBanner';
import { PopularArticleTopics } from '../../components/journal/PopularArticleTopics';
import { colors, typography } from '../../constants/theme';
import { articlesFilterConfig, defaultProductFilters, type SelectedFilters } from '../../data/filterData';
import type { Article, ArticleTopic } from '../../data/journalData';

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

        <View style={styles.featuredSection}>
          <Text style={styles.featuredTitle}>Популярные статьи</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
            {featuredArticles.map((item, index) => (
              <View key={item.id} style={index === featuredArticles.length - 1 ? undefined : styles.featuredCardGap}>
                <ArticleCard
                  item={item}
                  width={185}
                  imageHeight={185}
                  variant="featured"
                  onPress={() => onPressArticle(item.id)}
                />
              </View>
            ))}
          </ScrollView>
        </View>

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
  featuredSection: {
    marginTop: 26,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: 'rgba(255, 240, 225, 0.56)',
  },
  featuredTitle: {
    marginHorizontal: 16,
    fontSize: 20,
    lineHeight: 30,
    ...typography.Inter[600],
    color: colors.text,
  },
  horizontalList: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 2,
  },
  featuredCardGap: {
    marginRight: 8,
  },
});
