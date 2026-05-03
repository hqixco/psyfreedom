import { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { EmptyFavoritesState } from '../components/favorites/EmptyFavoritesState';
import { FavoritesChips } from '../components/favorites/FavoritesChips';
import { FavoritesGrid } from '../components/favorites/FavoritesGrid';
import { FavoritesHeader } from '../components/favorites/FavoritesHeader';
import { colors } from '../constants/theme';
import { FavoriteCategory, FavoriteItem, favoriteChips, mockFavorites } from '../data/favoritesData';

type FavoriteChipId = (typeof favoriteChips)[number]['id'];
const dismissedFavoriteIds = new Set<string>();

type FavoritesScreenProps = {
  onOpenCatalog: () => void;
  onOpenProductDetails?: (productId: string) => void;
  onOpenSpecialistDetails?: (specialistId: string) => void;
  onOpenArticleDetails?: (articleId: string) => void;
};

export function FavoritesScreen({
  onOpenCatalog,
  onOpenProductDetails,
  onOpenSpecialistDetails,
  onOpenArticleDetails,
}: FavoritesScreenProps) {
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);
  const [activeCategory, setActiveCategory] = useState<FavoriteChipId>('all');
  const [favorites] = useState<FavoriteItem[]>(() =>
    mockFavorites.filter((item) => !dismissedFavoriteIds.has(item.id)),
  );
  const [mutedHeartIds, setMutedHeartIds] = useState<Record<string, boolean>>({});

  const filteredFavorites = useMemo(() => {
    if (activeCategory === 'all') {
      return favorites;
    }

    return favorites.filter((item) => item.category === activeCategory);
  }, [activeCategory, favorites]);

  const handleToggleHeart = (id: string) => {
    setMutedHeartIds((prev) => {
      const nextMuted = !prev[id];

      if (nextMuted) {
        dismissedFavoriteIds.add(id);
        return { ...prev, [id]: true };
      }

      dismissedFavoriteIds.delete(id);
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const handleSelectCategory = (category: FavoriteChipId) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [activeCategory]);

  const handlePressItem = (item: FavoriteItem) => {
    if (item.status === 'deletedByAuthor') {
      console.log('deleted item', item.id);
      return;
    }

    switch (item.category as FavoriteCategory) {
      case 'products':
        onOpenProductDetails?.('product-1');
        break;
      case 'services':
        onOpenSpecialistDetails?.('specialist-1');
        break;
      case 'journal':
        onOpenArticleDetails?.('article-1');
        break;
      case 'video':
        console.log('open favorite video', item.id);
        break;
      default:
        console.log('open favorite', item.id);
        break;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 + insets.bottom }]}
        >
          <FavoritesHeader />
          {favorites.length === 0 ? (
            <EmptyFavoritesState onOpenCatalog={onOpenCatalog} />
          ) : (
            <>
              <FavoritesChips activeCategory={activeCategory} onSelect={handleSelectCategory} />
              <FavoritesGrid
                items={filteredFavorites}
                onPressItem={handlePressItem}
                onToggleHeart={handleToggleHeart}
                heartMutedMap={mutedHeartIds}
              />
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
