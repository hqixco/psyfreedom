import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { UniversalFilterSheet } from '../../components/filters/UniversalFilterSheet';
import { ProductCategoryGrid } from '../../components/products/ProductCategoryGrid';
import { ProductsGrid } from '../../components/products/ProductsGrid';
import { ProductsHelpBanner } from '../../components/products/ProductsHelpBanner';
import { ProductSortModal } from '../../components/products/ProductSortModal';
import { ProductsToolbar } from '../../components/products/ProductsToolbar';
import { TopProductsSection } from '../../components/products/TopProductsSection';
import { SearchOverlay } from '../../components/search/SearchOverlay';
import { colors } from '../../constants/theme';
import { defaultProductFilters, productFilterConfig, SelectedFilters } from '../../data/filterData';
import { productCategories, products, productSortOptions, topProducts } from '../../data/productsData';
import { LocationPickerScreen } from './LocationPickerScreen';
import { CatalogScreenNavigationProps } from './types';

type ProductsScreenProps = CatalogScreenNavigationProps & {
  initialCategoryId?: string;
  initialCategoryTitle?: string;
};

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

export function ProductsScreen({
  onBack,
  onOpenProductDetails,
  onOpenServices,
  onOpenProductsSection,
  setBottomTabsVisible,
  initialCategoryId,
  initialCategoryTitle,
}: ProductsScreenProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [screen, setScreen] = useState<'products' | 'location'>('products');
  const [selectedSort, setSelectedSort] = useState(productSortOptions[0]);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(defaultProductFilters);
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategoryId ?? null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const screenPadding = 16;
  const categoryGap = 8;
  const gridGap = 10;
  const categoryCardWidth = (width - screenPadding * 2 - categoryGap * 2) / 3;
  const productCardWidth = (width - screenPadding * 2 - gridGap) / 2;

  useEffect(() => {
    setBottomTabsVisible?.(screen !== 'location');

    return () => {
      setBottomTabsVisible?.(true);
    };
  }, [screen, setBottomTabsVisible]);

  useEffect(() => {
    setActiveCategory(initialCategoryId ?? null);
  }, [initialCategoryId]);

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

  if (screen === 'location') {
    return (
      <LocationPickerScreen
        onBack={() => {
          setScreen('products');
          setIsFilterOpen(true);
        }}
        bottomTabsHeight={100 + insets.bottom}
        onSelectLocation={(city) => {
          setSelectedFilters((prev) => ({
            ...prev,
            location: city,
          }));
          setScreen('products');
          setIsFilterOpen(true);
        }}
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
                <Ionicons name="chevron-back" size={24} color={colors.primaryDark} />
              </Pressable>

              <Text style={styles.title}>Товары</Text>
            </View>

            <Pressable style={styles.headerIconButton} onPress={() => setSearchVisible(true)}>
              <Ionicons name="search" size={22} color={colors.primaryDark} />
            </Pressable>
          </View>

          <ProductsHelpBanner onPress={onOpenServices} />

          <ProductCategoryGrid
            categories={productCategories}
            categoryWidth={categoryCardWidth}
            onPressCategory={(id) => setActiveCategory(id)}
          />

          <TopProductsSection
            products={topProducts}
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
    fontWeight: '600',
    color: '#033542',
  },
});
