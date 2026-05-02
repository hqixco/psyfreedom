import { useEffect, useState } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { SearchHeaderIcon } from '../../components/icons/SearchHeaderIcon';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { UniversalFilterSheet } from '../../components/filters/UniversalFilterSheet';
import { ProductCategoryGrid } from '../../components/products/ProductCategoryGrid';
import { ProductsGrid } from '../../components/products/ProductsGrid';
import { ProductsHelpBanner } from '../../components/products/ProductsHelpBanner';
import { ProductSortModal } from '../../components/products/ProductSortModal';
import { ProductsToolbar } from '../../components/products/ProductsToolbar';
import { TopProductsSection } from '../../components/products/TopProductsSection';
import { SearchOverlay } from '../../components/search/SearchOverlay';
import { colors, typography } from '../../constants/theme';
import { defaultProductFilters, productFilterConfig, type SelectedFilters } from '../../data/filterData';
import { productCategories, products, productSortOptions, topProducts } from '../../data/productsData';
import { LocationPickerScreen } from './LocationPickerScreen';
import { ProductCategoryScreen } from './ProductCategoryScreen';
import { type CatalogScreenNavigationProps } from './types';

type ProductsScreenProps = CatalogScreenNavigationProps & {
  initialCategoryId?: string;
  initialCategoryTitle?: string;
};

type ProductsView = 'products' | 'category' | 'location';

function getProductDetailId(productId: string) {
  return productId.replace(/-alt\d+$/, '');
}

const categoryTypeMap: Record<string, string[]> = {
  videos: ['Видеоурок'],
  promo: ['Промокод'],
  books: ['Книга'],
  groups: ['Группа'],
  courses: ['Курс'],
  webinars: ['Вебинар'],
  games: ['Игра'],
  tests: ['Тест'],
};

const filterTypeMap: Record<string, string[]> = {
  videoLessons: ['Видеоурок'],
  promoCodes: ['Промокод'],
  books: ['Книга'],
  therapyGroups: ['Группа'],
  courses: ['Курс'],
  webinars: ['Вебинар'],
  games: ['Игра'],
  tests: ['Тест'],
};

function getCategoryTitle(categoryId: string) {
  return productCategories.find((item) => item.id === categoryId)?.title.replace('\n', ' ') ?? 'Товары';
}

export function ProductsScreen({
  onBack,
  onOpenProductDetails,
  onOpenServices,
  setBottomTabsVisible,
  initialCategoryId,
  initialCategoryTitle,
}: ProductsScreenProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [screen, setScreen] = useState<ProductsView>(initialCategoryId ? 'category' : 'products');
  const [previousScreen, setPreviousScreen] = useState<Exclude<ProductsView, 'location'>>(
    initialCategoryId ? 'category' : 'products'
  );
  const [selectedSort, setSelectedSort] = useState(productSortOptions[0]);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(defaultProductFilters);
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategoryId ?? null);
  const [activeCategoryTitle, setActiveCategoryTitle] = useState<string | null>(initialCategoryTitle ?? null);
  const [favoriteMap, setFavoriteMap] = useState<Record<string, boolean>>({});
  const [searchVisible, setSearchVisible] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const screenPadding = 16;
  const categoryGap = 8;
  const gridGap = 10;
  const categoryCardWidth = Math.floor((width - screenPadding * 2 - categoryGap * 2) / 3);
  const productCardWidth = (width - screenPadding * 2 - gridGap) / 2;

  useEffect(() => {
    setBottomTabsVisible?.(screen !== 'location');

    return () => {
      setBottomTabsVisible?.(true);
    };
  }, [screen, setBottomTabsVisible]);

  useEffect(() => {
    setActiveCategory(initialCategoryId ?? null);
    setActiveCategoryTitle(initialCategoryTitle ?? (initialCategoryId ? getCategoryTitle(initialCategoryId) : null));
    setScreen(initialCategoryId ? 'category' : 'products');
    setPreviousScreen(initialCategoryId ? 'category' : 'products');
  }, [initialCategoryId, initialCategoryTitle]);

  const visibleProducts = products.filter((item) => {
    if (activeCategory) {
      const allowedTypes = categoryTypeMap[activeCategory] ?? [];
      if (!allowedTypes.includes(item.type)) {
        return false;
      }
    }

    if (selectedFilters.productTypes.length > 0) {
      const allowedByFilters = selectedFilters.productTypes.flatMap((filterId) => filterTypeMap[filterId] ?? []);

      if (!allowedByFilters.includes(item.type)) {
        return false;
      }
    }

    return true;
  });

  const toggleFavorite = (id: string) => {
    setFavoriteMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveCategoryTitle(getCategoryTitle(categoryId));
    setPreviousScreen('category');
    setScreen('category');
  };

  if (screen === 'location') {
    return (
      <LocationPickerScreen
        onBack={() => {
          setScreen(previousScreen);
          setIsFilterOpen(true);
        }}
        bottomTabsHeight={100 + insets.bottom}
        onSelectLocation={(city) => {
          setSelectedFilters((prev) => ({
            ...prev,
            location: city,
          }));
          setScreen(previousScreen);
          setIsFilterOpen(true);
        }}
      />
    );
  }

  if (screen === 'category' && activeCategory) {
    return (
      <ProductCategoryScreen
        title={activeCategoryTitle ?? getCategoryTitle(activeCategory)}
        products={visibleProducts}
        favoriteMap={favoriteMap}
        selectedSort={selectedSort}
        selectedFilters={selectedFilters}
        isSortOpen={isSortOpen}
        isFilterOpen={isFilterOpen}
        sortOptions={productSortOptions}
        onBack={() => setScreen('products')}
        onOpenServices={onOpenServices}
        onOpenSort={() => setIsSortOpen(true)}
        onCloseSort={() => setIsSortOpen(false)}
        onSelectSort={(option) => {
          setSelectedSort(option);
          setIsSortOpen(false);
        }}
        onOpenFilter={() => setIsFilterOpen(true)}
        onCloseFilter={() => setIsFilterOpen(false)}
        onApplyFilters={(filters) => {
          setSelectedFilters(filters);
          setIsFilterOpen(false);
        }}
        onResetFilters={() => setSelectedFilters(defaultProductFilters)}
        onChangeFilters={setSelectedFilters}
        onOpenLocation={() => {
          setPreviousScreen('category');
          setScreen('location');
          setIsFilterOpen(false);
        }}
        onToggleFavorite={toggleFavorite}
        onPressProduct={(id) => onOpenProductDetails(getProductDetailId(id))}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 + insets.bottom }]}
        >
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Pressable style={styles.headerIconButton} onPress={onBack}>
                <BackChevronIcon color={colors.primaryDark} />
              </Pressable>

              <Text style={styles.title}>Товары</Text>
            </View>

            <Pressable style={styles.headerIconButton} onPress={() => setSearchVisible(true)}>
              <SearchHeaderIcon color={colors.primaryDark} />
            </Pressable>
          </View>

          <ProductsHelpBanner onPress={onOpenServices} />

          <ProductCategoryGrid
            categories={productCategories}
            categoryWidth={categoryCardWidth}
            onPressCategory={openCategory}
          />

          <TopProductsSection
            products={topProducts}
            favoriteMap={favoriteMap}
            onToggleFavorite={toggleFavorite}
            onPressProduct={(id) => onOpenProductDetails(getProductDetailId(id))}
          />

          <ProductsToolbar
            selectedSort={selectedSort}
            onOpenSort={() => setIsSortOpen(true)}
            onOpenFilter={() => setIsFilterOpen(true)}
          />

          <ProductsGrid
            products={visibleProducts}
            cardWidth={productCardWidth}
            favoriteMap={favoriteMap}
            onToggleFavorite={toggleFavorite}
            onPressProduct={(id) => onOpenProductDetails(getProductDetailId(id))}
          />
        </ScrollView>
      </View>

      <ProductSortModal
        visible={isSortOpen}
        selectedSort={selectedSort}
        options={productSortOptions}
        onClose={() => setIsSortOpen(false)}
        onSelect={(option) => {
          setSelectedSort(option);
          setIsSortOpen(false);
        }}
      />

      <UniversalFilterSheet
        visible={isFilterOpen}
        config={productFilterConfig}
        selectedFilters={selectedFilters}
        onChangeFilters={setSelectedFilters}
        onApply={(filters) => {
          setSelectedFilters(filters);
          if (filters.productTypes.length === 1) {
            const selectedFilter = filters.productTypes[0];
            if (selectedFilter === 'tests') {
              setActiveCategory('tests');
              setActiveCategoryTitle(getCategoryTitle('tests'));
            }
          }
          setIsFilterOpen(false);
        }}
        onReset={() => {
          setSelectedFilters(defaultProductFilters);
          setActiveCategory(null);
        }}
        onClose={() => setIsFilterOpen(false)}
        onOpenLocation={() => {
          setPreviousScreen('products');
          setScreen('location');
          setIsFilterOpen(false);
        }}
      />

      <SearchOverlay
        visible={searchVisible}
        onClose={() => setSearchVisible(false)}
        onOpenSpecialists={(topicId) => onOpenServices(undefined, topicId)}
      />
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
    paddingTop: 8,
  },
  header: {
    marginTop: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 6,
    fontSize: 18,
    lineHeight: 22,
    ...typography.Inter[600],
    color: '#033542',
  },
});
