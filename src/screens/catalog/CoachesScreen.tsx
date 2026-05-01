import { ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { UniversalFilterSheet } from '../../components/filters/UniversalFilterSheet';
import { CoachCategoriesSection } from '../../components/services/CoachCategoriesSection';
import { ServicesHelpBanner } from '../../components/services/ServicesHelpBanner';
import { SpecialistsGrid } from '../../components/services/SpecialistsGrid';
import { SpecialistsToolbar } from '../../components/services/SpecialistsToolbar';
import { colors } from '../../constants/theme';
import { coachesFilterConfig, SelectedFilters } from '../../data/filterData';
import { coachCategories, coaches } from '../../data/servicesData';
import { ProductSortModal } from '../../components/products/ProductSortModal';

type CoachesScreenProps = {
  selectedSort: string;
  selectedFilters: SelectedFilters;
  isSortOpen: boolean;
  isFilterOpen: boolean;
  onOpenServicesHelp: () => void;
  onOpenSort: () => void;
  onCloseSort: () => void;
  onSelectSort: (option: string) => void;
  onOpenFilter: () => void;
  onCloseFilter: () => void;
  onApplyFilters: (filters: SelectedFilters) => void;
  onResetFilters: () => void;
  onChangeFilters: (filters: SelectedFilters) => void;
  onOpenLocation: () => void;
  onPressCoachCategory: (id: string) => void;
  onPressSpecialist: (id: string) => void;
};

export function CoachesScreen({
  selectedSort,
  selectedFilters,
  isSortOpen,
  isFilterOpen,
  onOpenServicesHelp,
  onOpenSort,
  onCloseSort,
  onSelectSort,
  onOpenFilter,
  onCloseFilter,
  onApplyFilters,
  onResetFilters,
  onChangeFilters,
  onOpenLocation,
  onPressCoachCategory,
  onPressSpecialist,
}: CoachesScreenProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const cardGap = 10;
  const coachCardWidth = (width - 16 * 2 - 8) / 2;
  const specialistCardWidth = (width - 16 * 2 - cardGap) / 2;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 + insets.bottom }]}
      >
        <Text style={styles.title}>Коучи</Text>
        <ServicesHelpBanner onPress={onOpenServicesHelp} />
        <CoachCategoriesSection categories={coachCategories} cardWidth={coachCardWidth} onPressCategory={onPressCoachCategory} />
        <SpecialistsToolbar selectedSort={selectedSort} onOpenSort={onOpenSort} onOpenFilter={onOpenFilter} />
        <SpecialistsGrid specialists={coaches} cardWidth={specialistCardWidth} onPressSpecialist={onPressSpecialist} />
      </ScrollView>

      <ProductSortModal
        visible={isSortOpen}
        selectedSort={selectedSort}
        options={['Популярные', 'По цене', 'Новые анкеты', 'Топ-10', 'По рейтингу']}
        onClose={onCloseSort}
        onSelect={onSelectSort}
      />

      <UniversalFilterSheet
        visible={isFilterOpen}
        onClose={onCloseFilter}
        onApply={onApplyFilters}
        onReset={onResetFilters}
        config={coachesFilterConfig}
        selectedFilters={selectedFilters}
        onChangeFilters={onChangeFilters}
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
  title: {
    marginHorizontal: 16,
    marginTop: 8,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    color: colors.text,
  },
});
