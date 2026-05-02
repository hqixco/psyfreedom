import { useWindowDimensions } from 'react-native';
import { CoachCategoriesSection } from '../../components/services/CoachCategoriesSection';
import { coachesFilterConfig, type SelectedFilters } from '../../data/filterData';
import { coachCategories, coaches } from '../../data/servicesData';
import { SpecialistsCategoryScreen } from './SpecialistsCategoryScreen';

type CoachesScreenProps = {
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
  onPressCoachCategory: (id: string) => void;
  onPressSpecialist: (id: string) => void;
};

export function CoachesScreen({
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
  onPressCoachCategory,
  onPressSpecialist,
}: CoachesScreenProps) {
  const { width } = useWindowDimensions();
  const coachCardWidth = Math.min(181, width - 32);

  return (
    <SpecialistsCategoryScreen
      title="Коучи"
      specialists={coaches}
      filterConfig={coachesFilterConfig}
      selectedSort={selectedSort}
      selectedFilters={selectedFilters}
      isSortOpen={isSortOpen}
      isFilterOpen={isFilterOpen}
      onBack={onBack}
      onOpenServicesHelp={onOpenServicesHelp}
      onOpenSort={onOpenSort}
      onCloseSort={onCloseSort}
      onSelectSort={onSelectSort}
      onOpenFilter={onOpenFilter}
      onCloseFilter={onCloseFilter}
      onApplyFilters={onApplyFilters}
      onResetFilters={onResetFilters}
      onChangeFilters={onChangeFilters}
      onOpenLocation={onOpenLocation}
      onPressSpecialist={onPressSpecialist}
      sortOptions={['Популярные', 'По цене', 'Новые анкеты', 'Топ-10', 'По рейтингу']}
      topSection={
        <CoachCategoriesSection
          categories={coachCategories}
          cardWidth={coachCardWidth}
          onPressCategory={onPressCoachCategory}
        />
      }
    />
  );
}
