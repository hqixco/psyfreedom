import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CatalogBanner } from '../../components/catalog/CatalogBanner';
import { CatalogCategoryCard } from '../../components/catalog/CatalogCategoryCard';
import { CatalogSearch } from '../../components/catalog/CatalogSearch';
import { CatalogTabs } from '../../components/catalog/CatalogTabs';
import { QuickCategoryGrid } from '../../components/catalog/QuickCategoryGrid';
import { SearchOverlay } from '../../components/search/SearchOverlay';
import { colors } from '../../constants/theme';
import { catalogTabs, homeBanners, quickLinks } from '../../data/catalogData';
import { CatalogScreenNavigationProps } from './types';

export function CatalogScreen({
  bottomTabsHeight,
  onOpenProducts,
  onOpenServices,
  onOpenJournal,
  onOpenArticleDetails,
}: CatalogScreenNavigationProps) {
  const { width } = useWindowDimensions();
  const [audienceTab, setAudienceTab] = useState('client');
  const [search, setSearch] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const horizontalPadding = 16;
  const gap = 8;
  const quickCardWidth = (width - horizontalPadding * 2 - gap * 2) / 3;
  const halfCardWidth = (width - horizontalPadding * 2 - gap) / 2;

  const handleOpenQuickLink = (id: string) => {
    if (id === 'services') {
      onOpenServices();
      return;
    }

    if (id === 'products') {
      onOpenProducts();
      return;
    }

    onOpenJournal();
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: 100 + bottomTabsHeight }]}
      >
        <CatalogSearch value={search} onChangeText={setSearch} onFocus={() => setSearchVisible(true)} />

        <CatalogTabs items={catalogTabs} activeId={audienceTab} onChange={setAudienceTab} />

        <QuickCategoryGrid items={quickLinks} cardWidth={quickCardWidth} onPressItem={handleOpenQuickLink} />

        <View style={styles.smallBannersRow}>
          <Pressable onPress={onOpenJournal}>
            <CatalogCategoryCard
              title="Юмор"
              image={homeBanners[0].image}
              width={halfCardWidth}
              colorsSet={['#FFC76B', '#FF8E68']}
            />
          </Pressable>
          <Pressable onPress={onOpenJournal}>
            <CatalogCategoryCard
              title="Знакомства"
              image={homeBanners[1].image}
              width={halfCardWidth}
              colorsSet={['#FF5F7D', '#FF9BB5']}
            />
          </Pressable>
        </View>

        <CatalogBanner
          title="Новая книга О. Рой"
          subtitle="с 16 февраля"
          image={homeBanners[2].image}
          height={118}
          backgroundColor="#66D5ED"
        />

        <CatalogBanner
          title={'Как справиться\nс депрессией?'}
          subtitle="Ваши проблемы решаются"
          image={homeBanners[3].image}
          height={160}
          backgroundColor={colors.grayBanner}
        />
      </ScrollView>

      <SearchOverlay
        visible={searchVisible}
        onClose={() => setSearchVisible(false)}
        onOpenArticle={() => onOpenArticleDetails('article-1')}
        onOpenSpecialists={(topicId) => onOpenServices(undefined, topicId)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingTop: 8,
  },
  smallBannersRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 20,
    justifyContent: 'space-between',
  },
});
