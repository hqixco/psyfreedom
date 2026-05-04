import { Ionicons } from '@expo/vector-icons';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { EmptyFavoritesState } from '../components/favorites/EmptyFavoritesState';
import { FavoritesChips } from '../components/favorites/FavoritesChips';
import { FavoritesGrid } from '../components/favorites/FavoritesGrid';
import { FavoritesHeader } from '../components/favorites/FavoritesHeader';
import { colors, typography } from '../constants/theme';
import { articleDetailsMap } from '../data/articlesData';
import { productDetailsMap } from '../data/productDetailsData';
import { specialists } from '../data/servicesData';
import {
  FavoriteCategory,
  FavoriteItem,
  favoriteChips,
  dismissedFavoriteIds,
  mockFavorites,
} from '../data/favoritesData';

type FavoriteChipId = (typeof favoriteChips)[number]['id'];

type FavoritesScreenProps = {
  onOpenCatalog: () => void;
  onOpenProductDetails?: (productId: string, isPurchased?: boolean, isFavorite?: boolean) => void;
  onOpenSpecialistDetails?: (specialistId: string) => void;
  onOpenArticleDetails?: (articleId: string) => void;
  onOpenVideoDetails?: (videoId: string) => void;
};

export function FavoritesScreen({
  onOpenCatalog,
  onOpenProductDetails,
  onOpenSpecialistDetails,
  onOpenArticleDetails,
  onOpenVideoDetails,
}: FavoritesScreenProps) {
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);
  const [activeCategory, setActiveCategory] = useState<FavoriteChipId>('all');
  const [favorites] = useState<FavoriteItem[]>(() =>
    mockFavorites.filter((item) => !dismissedFavoriteIds.has(item.id)),
  );
  const [mutedHeartIds, setMutedHeartIds] = useState<Record<string, boolean>>({});
  const [hiddenFavoriteIds, setHiddenFavoriteIds] = useState<Record<string, boolean>>({});
  const [selectedDeletedItem, setSelectedDeletedItem] = useState<FavoriteItem | null>(null);
  const specialistMap = useMemo(
    () => new Map(specialists.map((specialist) => [specialist.id, specialist])),
    [],
  );

  const filteredFavorites = useMemo(() => {
    const baseFavorites = favorites.filter((item) => !hiddenFavoriteIds[item.id]);

    if (activeCategory === 'all') {
      return baseFavorites;
    }

    return baseFavorites.filter((item) => item.category === activeCategory);
  }, [activeCategory, favorites, hiddenFavoriteIds]);

  const visibleFavorites = useMemo(
    () =>
      filteredFavorites.map((item) => {
        if (item.category === 'products' && item.productId) {
          const details = productDetailsMap[item.productId];

          return details
            ? {
                ...item,
                title: details.title,
                type: details.categoryLabel,
                price: details.price,
                rating: details.rating,
                image: details.image,
              }
            : item;
        }

        if (item.category === 'services' && item.specialistId) {
          const specialist = specialistMap.get(item.specialistId);

          return specialist
            ? {
                ...item,
                title: specialist.name,
                type: specialist.specialization,
                price: specialist.price,
                rating: specialist.rating,
                image: specialist.image,
              }
            : item;
        }

        if (item.category === 'journal' && item.articleId) {
          const articleDetails = articleDetailsMap[item.articleId];
          return articleDetails
            ? {
                ...item,
                title: articleDetails.title,
                type: articleDetails.topic,
                image: articleDetails.image,
              }
            : item;
        }

        return item;
      }),
    [filteredFavorites, specialistMap],
  );

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
      setSelectedDeletedItem(item);
      return;
    }

    switch (item.category as FavoriteCategory) {
      case 'products':
        onOpenProductDetails?.(item.productId ?? 'product-1', false, true);
        break;
      case 'services':
        onOpenSpecialistDetails?.(item.specialistId ?? 'specialist-1');
        break;
      case 'journal':
        onOpenArticleDetails?.(item.articleId ?? 'article-1');
        break;
      case 'video':
        onOpenVideoDetails?.(item.videoId ?? 'video-journal-1');
        break;
      default:
        console.log('open favorite', item.id);
        break;
    }
  };

  const handleDeleteSelectedItem = () => {
    if (!selectedDeletedItem) {
      return;
    }

    dismissedFavoriteIds.add(selectedDeletedItem.id);
    setHiddenFavoriteIds((prev) => ({ ...prev, [selectedDeletedItem.id]: true }));
    setSelectedDeletedItem(null);
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
                items={visibleFavorites}
                onPressItem={handlePressItem}
                onToggleHeart={handleToggleHeart}
                heartMutedMap={mutedHeartIds}
              />
            </>
          )}
        </ScrollView>

        <Modal
          visible={Boolean(selectedDeletedItem)}
          transparent
          animationType="fade"
          presentationStyle="overFullScreen"
          statusBarTranslucent
          navigationBarTranslucent
          onRequestClose={() => setSelectedDeletedItem(null)}
        >
          <Pressable style={styles.overlay} onPress={() => setSelectedDeletedItem(null)}>
            <View style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]}>
              <View style={styles.header}>
                <Text style={styles.sheetTitle}>Удалено автором</Text>
                <Pressable onPress={() => setSelectedDeletedItem(null)}>
                  <Ionicons name="close" size={24} color={colors.primaryDark} />
                </Pressable>
              </View>

              <Text style={styles.sheetText}>
                {selectedDeletedItem?.title
                  ? `Товар «${selectedDeletedItem.title}» больше недоступен в каталоге. Удалить его из избранного?`
                  : 'Товар больше недоступен в каталоге. Удалить его из избранного?'}
              </Text>

              <View style={styles.buttons}>
                <Pressable style={styles.deleteButton} onPress={handleDeleteSelectedItem}>
                  <Text style={styles.deleteButtonText}>Удалить</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </Modal>
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
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 22,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  sheetTitle: {
    flex: 1,
    fontSize: 20,
    lineHeight: 26,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  sheetText: {
    marginTop: 20,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
  },
  deleteButton: {
    flex: 1,
    height: 41,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primary,
  },
});
