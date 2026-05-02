import { useEffect, useState } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { SearchHeaderIcon } from '../../components/icons/SearchHeaderIcon';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { UniversalFilterSheet } from '../../components/filters/UniversalFilterSheet';
import { ProductSortModal } from '../../components/products/ProductSortModal';
import { SearchOverlay } from '../../components/search/SearchOverlay';
import { ServiceCategoryGrid } from '../../components/services/ServiceCategoryGrid';
import { ServicesHelpBanner } from '../../components/services/ServicesHelpBanner';
import { SpecialistsGrid } from '../../components/services/SpecialistsGrid';
import { SpecialistsToolbar } from '../../components/services/SpecialistsToolbar';
import { TopSpecialistsSection } from '../../components/services/TopSpecialistsSection';
import { colors, typography } from '../../constants/theme';
import { defaultProductFilters, type SelectedFilters, servicesFilterConfig } from '../../data/filterData';
import { serviceCategories, type Specialist, specialists, topSpecialists } from '../../data/servicesData';
import { CoachesScreen } from './CoachesScreen';
import { LocationPickerScreen } from './LocationPickerScreen';
import { SpecialistsCategoryScreen } from './SpecialistsCategoryScreen';
import { type CatalogScreenNavigationProps } from './types';

type ServicesScreenProps = CatalogScreenNavigationProps & {
  initialCategoryId?: string;
  initialCategoryTitle?: string;
  initialTopicId?: string;
};

type ServicesView = 'services' | 'category' | 'map';
type BaseServicesView = Exclude<ServicesView, 'map'>;

const serviceSortOptions = ['По цене', 'По рейтингу', 'Новые анкеты'];

function getSpecialistDetailId(id: string) {
  return id;
}

function getDefaultView(initialCategoryId?: string, initialCategoryTitle?: string): BaseServicesView {
  return initialCategoryId || initialCategoryTitle ? 'category' : 'services';
}

function getCategoryTitle(categoryId: string) {
  const fallbackTitle = 'Специалисты';
  const category = serviceCategories.find((item) => item.id === categoryId);

  if (!category) {
    return fallbackTitle;
  }

  return category.title.replace(' /\n', ' / ');
}

function getCategorySpecialists(categoryId: string): Specialist[] {
  switch (categoryId) {
    case 'psychologists':
      return specialists.filter(
        (item) => item.specialization === 'Психолог' || item.specialization === 'Психотерапевт'
      );
    case 'coaches':
      return specialists.filter((item) => item.specialization === 'Коуч');
    case 'psychiatrists':
      return specialists.filter((item) => item.specialization === 'Психиатр');
    case 'self-development':
      return specialists.filter((item) => item.specialization === 'Саморазвитие');
    case 'education':
      return specialists.filter(
        (item) => item.specialization === 'Психолог' || item.specialization === 'Психотерапевт'
      );
    case 'mentoring':
      return specialists.filter((item) => item.specialization === 'Ментор');
    default:
      return specialists;
  }
}

export function ServicesScreen({
  onBack,
  onOpenServices,
  onOpenSpecialistDetails,
  setBottomTabsVisible,
  initialCategoryId,
  initialCategoryTitle,
  initialTopicId,
}: ServicesScreenProps) {
  const defaultView = getDefaultView(initialCategoryId, initialCategoryTitle);
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [currentView, setCurrentView] = useState<ServicesView>(defaultView);
  const [previousView, setPreviousView] = useState<BaseServicesView>(defaultView);
  const [selectedCategoryId, setSelectedCategoryId] = useState(initialCategoryId);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState(initialCategoryTitle);
  const [returnToFilter, setReturnToFilter] = useState(false);
  const [selectedSort, setSelectedSort] = useState(serviceSortOptions[0]);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    ...defaultProductFilters,
    topics: initialTopicId ? [initialTopicId] : [],
  });
  const [searchVisible, setSearchVisible] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const categoryWidth = Math.min(Math.floor((width - 16 * 2 - 8 * 2) / 3), 118);
  const specialistCardWidth = Math.min(185, Math.floor((width - 16 * 2 - 10) / 2));

  useEffect(() => {
    setBottomTabsVisible?.(currentView !== 'map');

    return () => {
      setBottomTabsVisible?.(true);
    };
  }, [currentView, setBottomTabsVisible]);

  useEffect(() => {
    if (!initialTopicId) {
      return;
    }

    setSelectedFilters((prev) => ({
      ...prev,
      topics: [initialTopicId],
    }));
  }, [initialTopicId]);

  useEffect(() => {
    const nextView = getDefaultView(initialCategoryId, initialCategoryTitle);
    setCurrentView(nextView);
    setPreviousView(nextView);
    setSelectedCategoryId(initialCategoryId);
    setSelectedCategoryTitle(initialCategoryTitle);
  }, [initialCategoryId, initialCategoryTitle]);

  const openCategory = (categoryId: string, title?: string) => {
    setSelectedCategoryId(categoryId);
    setSelectedCategoryTitle(title ?? getCategoryTitle(categoryId));
    setPreviousView('category');
    setCurrentView('category');
  };

  const openMap = (fromFilter = false) => {
    const nextPreviousView = currentView === 'map' ? previousView : currentView;
    setPreviousView(nextPreviousView);
    setReturnToFilter(fromFilter);
    setIsFilterOpen(false);
    setCurrentView('map');
  };

  const handleLocationBack = () => {
    setCurrentView(previousView);
    if (returnToFilter) {
      setIsFilterOpen(true);
      setReturnToFilter(false);
    }
  };

  const handleLocationSelect = (city: string) => {
    setSelectedFilters((prev) => ({ ...prev, location: city }));
    setCurrentView(previousView);
    if (returnToFilter) {
      setIsFilterOpen(true);
      setReturnToFilter(false);
    }
  };

  if (currentView === 'map') {
    return <LocationPickerScreen onBack={handleLocationBack} onSelectLocation={handleLocationSelect} />;
  }

  if (currentView === 'category' && selectedCategoryId) {
    if (selectedCategoryId === 'coaches') {
      return (
        <CoachesScreen
          selectedSort={selectedSort}
          selectedFilters={selectedFilters}
          isSortOpen={isSortOpen}
          isFilterOpen={isFilterOpen}
          onBack={() => setCurrentView('services')}
          onOpenServicesHelp={() => onOpenServices(selectedCategoryTitle ?? 'Коучи')}
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
          onOpenLocation={() => openMap(true)}
          onPressCoachCategory={() => console.log('open coach category')}
          onPressSpecialist={(id) => onOpenSpecialistDetails(getSpecialistDetailId(id))}
        />
      );
    }

    return (
      <SpecialistsCategoryScreen
        title={selectedCategoryTitle ?? getCategoryTitle(selectedCategoryId)}
        specialists={getCategorySpecialists(selectedCategoryId)}
        filterConfig={servicesFilterConfig}
        selectedSort={selectedSort}
        selectedFilters={selectedFilters}
        isSortOpen={isSortOpen}
        isFilterOpen={isFilterOpen}
        onBack={() => setCurrentView('services')}
        onOpenServicesHelp={() => onOpenServices(selectedCategoryTitle ?? getCategoryTitle(selectedCategoryId))}
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
        onOpenLocation={() => openMap(true)}
        onPressSpecialist={(id) => onOpenSpecialistDetails(getSpecialistDetailId(id))}
        sortOptions={serviceSortOptions}
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
              <Text style={styles.title}>Услуги</Text>
            </View>
            <Pressable style={styles.headerIconButton} onPress={() => setSearchVisible(true)}>
              <SearchHeaderIcon color={colors.primaryDark} />
            </Pressable>
          </View>

          <ServicesHelpBanner onPress={() => console.log('pick specialist')} />

          <ServiceCategoryGrid
            categories={serviceCategories}
            categoryWidth={categoryWidth}
            onPressCategory={(id) => openCategory(id, getCategoryTitle(id))}
          />

          <TopSpecialistsSection
            specialists={topSpecialists}
            onPressSpecialist={(id) => onOpenSpecialistDetails(getSpecialistDetailId(id))}
          />

          <Pressable style={styles.mapButton} onPress={() => openMap()}>
            <Text style={styles.mapButtonText}>Показать на карте</Text>
          </Pressable>

          <SpecialistsToolbar
            selectedSort={selectedSort}
            onOpenSort={() => setIsSortOpen(true)}
            onOpenFilter={() => setIsFilterOpen(true)}
          />

          <SpecialistsGrid
            specialists={specialists}
            cardWidth={specialistCardWidth}
            onPressSpecialist={(id) => onOpenSpecialistDetails(getSpecialistDetailId(id))}
          />
        </ScrollView>
      </View>

      <ProductSortModal
        visible={isSortOpen}
        selectedSort={selectedSort}
        options={serviceSortOptions}
        onClose={() => setIsSortOpen(false)}
        onSelect={(option) => {
          setSelectedSort(option);
          setIsSortOpen(false);
        }}
      />

      <UniversalFilterSheet
        visible={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={(filters) => {
          setSelectedFilters(filters);
          setIsFilterOpen(false);
        }}
        onReset={() => setSelectedFilters(defaultProductFilters)}
        config={servicesFilterConfig}
        selectedFilters={selectedFilters}
        onChangeFilters={setSelectedFilters}
        onOpenLocation={() => openMap(true)}
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
  mapButton: {
    height: 45,
    marginTop: 31,
    marginHorizontal: 16,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#05728F',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  mapButtonText: {
    fontSize: 16,
    lineHeight: 19,
    ...typography.Inter[600],
    color: '#033542',
  },
});
