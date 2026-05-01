import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArticleAuthorSection } from '../../components/articles/ArticleAuthorSection';
import { ArticleContent } from '../../components/articles/ArticleContent';
import { ArticleDetailsHeader } from '../../components/articles/ArticleDetailsHeader';
import { ArticleFavoriteButton } from '../../components/articles/ArticleFavoriteButton';
import { ArticleHero } from '../../components/articles/ArticleHero';
import { colors } from '../../constants/theme';
import { getArticleDetailsById } from '../../data/articlesData';
import { ArticleScreenProps } from './types';

export function ArticleDetailsScreen({
  article,
  onBack,
  setBottomTabsVisible,
}: ArticleScreenProps) {
  const insets = useSafeAreaInsets();
  const details = getArticleDetailsById(article.id);
  const [isFavorite, setIsFavorite] = useState(Boolean(details.isFavorite));

  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);

    return () => {
      setBottomTabsVisible(true);
    };
  }, [setBottomTabsVisible]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: 90 + insets.bottom }]}
      >
        <ArticleDetailsHeader
          onBack={onBack}
          onShare={() => console.log('share article', details.id)}
        />
        <ArticleHero image={details.image} />
        <ArticleContent
          title={details.title}
          topic={details.topic}
          content={details.content}
        />
        <ArticleAuthorSection author={details.author} />
        <ArticleFavoriteButton
          isFavorite={isFavorite}
          onPress={() => setIsFavorite((value) => !value)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingTop: 0,
  },
});
