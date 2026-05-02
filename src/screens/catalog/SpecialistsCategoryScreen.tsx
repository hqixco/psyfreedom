import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { UniversalFilterSheet } from '../../components/filters/UniversalFilterSheet';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { ProductSortModal } from '../../components/products/ProductSortModal';
import { ServicesHelpBanner } from '../../components/services/ServicesHelpBanner';
import { SpecialistsGrid } from '../../components/services/SpecialistsGrid';
import { SpecialistsToolbar } from '../../components/services/SpecialistsToolbar';
import { colors, typography } from '../../constants/theme';
import type { FilterConfig, SelectedFilters } from '../../data/filterData';
import type { Specialist } from '../../data/servicesData';

type SpecialistsCategoryScreenProps = {
  title: string;
  specialists: Specialist[];
  filterConfig: FilterConfig;
  selectedSort: string;
  selectedFilters: SelectedFilters;
  isSortOpen: boolean;
  isFilterOpen: boolean;
  onBack: () => void;
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
  onPressSpecialist: (id: string) => void;
  sortOptions: string[];
  topSection?: ReactNode;
};

export function SpecialistsCategoryScreen({
  title,
  specialists,
  filterConfig,
  selectedSort,
  selectedFilters,
  isSortOpen,
  isFilterOpen,
  onBack,
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
  onPressSpecialist,
  sortOptions,
  topSection,
}: SpecialistsCategoryScreenProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const specialistCardWidth = Math.min(185, Math.floor((width - 16 * 2 - 10) / 2));

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 + insets.bottom }]}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Pressable style={styles.headerIconButton} onPress={onBack} hitSlop={12}>
              <BackChevronIcon color={colors.primaryDark} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>

        <ServicesHelpBanner onPress={onOpenServicesHelp} />
        {topSection}
        <SpecialistsToolbar selectedSort={selectedSort} onOpenSort={onOpenSort} onOpenFilter={onOpenFilter} />
        <SpecialistsGrid
          specialists={specialists}
          cardWidth={specialistCardWidth}
          onPressSpecialist={onPressSpecialist}
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
        onClose={onCloseFilter}
        onApply={onApplyFilters}
        onReset={onResetFilters}
        config={filterConfig}
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
    zIndex: 10,
  },
  title: {
    marginLeft: 6,
    fontSize: 18,
    lineHeight: 22,
    ...typography.Inter[600],
    color: '#033542',
  },
});
