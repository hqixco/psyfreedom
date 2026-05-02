import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { ProductSortModal } from '../../components/products/ProductSortModal';
import { ProductsGrid } from '../../components/products/ProductsGrid';
import { ProductsHelpBanner } from '../../components/products/ProductsHelpBanner';
import { ProductsToolbar } from '../../components/products/ProductsToolbar';
import { colors, typography } from '../../constants/theme';
import type { SelectedFilters } from '../../data/filterData';
import { productFilterConfig } from '../../data/filterData';
import type { Product } from '../../data/productsData';
import { UniversalFilterSheet } from '../../components/filters/UniversalFilterSheet';

type ProductCategoryScreenProps = {
  title: string;
  products: Product[];
  favoriteMap: Record<string, boolean>;
  selectedSort: string;
  selectedFilters: SelectedFilters;
  isSortOpen: boolean;
  isFilterOpen: boolean;
  sortOptions: string[];
  onBack: () => void;
  onOpenServices: () => void;
  onOpenSort: () => void;
  onCloseSort: () => void;
  onSelectSort: (option: string) => void;
  onOpenFilter: () => void;
  onCloseFilter: () => void;
  onApplyFilters: (filters: SelectedFilters) => void;
  onResetFilters: () => void;
  onChangeFilters: (filters: SelectedFilters) => void;
  onOpenLocation: () => void;
  onToggleFavorite: (id: string) => void;
  onPressProduct: (id: string) => void;
};

export function ProductCategoryScreen({
  title,
  products,
  favoriteMap,
  selectedSort,
  selectedFilters,
  isSortOpen,
  isFilterOpen,
  sortOptions,
  onBack,
  onOpenServices,
  onOpenSort,
  onCloseSort,
  onSelectSort,
  onOpenFilter,
  onCloseFilter,
  onApplyFilters,
  onResetFilters,
  onChangeFilters,
  onOpenLocation,
  onToggleFavorite,
  onPressProduct,
}: ProductCategoryScreenProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const productCardWidth = (width - 16 * 2 - 10) / 2;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 + insets.bottom }]}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Pressable style={styles.headerIconButton} onPress={onBack}>
              <BackChevronIcon color={colors.primaryDark} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>

        <ProductsHelpBanner onPress={onOpenServices} />

        <ProductsToolbar
          selectedSort={selectedSort}
          onOpenSort={onOpenSort}
          onOpenFilter={onOpenFilter}
        />

        <ProductsGrid
          products={products}
          cardWidth={productCardWidth}
          favoriteMap={favoriteMap}
          onToggleFavorite={onToggleFavorite}
          onPressProduct={onPressProduct}
        />
      </ScrollView>

      <ProductSortModal
        visible={isSortOpen}
        selectedSort={selectedSort}
        options={sortOptions}
        onClose={onCloseSort}
        onSelect={onSelectSort}
      />

      <UniversalFilterSheet
        visible={isFilterOpen}
        config={productFilterConfig}
        selectedFilters={selectedFilters}
        onChangeFilters={onChangeFilters}
        onApply={onApplyFilters}
        onReset={onResetFilters}
        onClose={onCloseFilter}
        onOpenLocation={onOpenLocation}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
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
