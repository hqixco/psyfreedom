import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { UniversalFilterSheet } from '../../components/filters/UniversalFilterSheet';
import { ProductSortModal } from '../../components/products/ProductSortModal';
import { ServiceCategoryGrid } from '../../components/services/ServiceCategoryGrid';
import { ServicesHelpBanner } from '../../components/services/ServicesHelpBanner';
import { SpecialistsGrid } from '../../components/services/SpecialistsGrid';
import { SpecialistsToolbar } from '../../components/services/SpecialistsToolbar';
import { TopSpecialistsSection } from '../../components/services/TopSpecialistsSection';
import { colors } from '../../constants/theme';
import { defaultProductFilters, SelectedFilters, servicesFilterConfig } from '../../data/filterData';
import { serviceCategories, specialists, topSpecialists } from '../../data/servicesData';
import { CoachesScreen } from './CoachesScreen';
import { LocationPickerScreen } from './LocationPickerScreen';
import { CatalogScreenNavigationProps } from './types';

type ServicesScreenProps = CatalogScreenNavigationProps & {
  initialCategoryId?: string;
  initialCategoryTitle?: string;
  initialTopicId?: string;
};

type ServicesView = 'services' | 'coaches' | 'map';
type BaseServicesView = Exclude<ServicesView, 'map'>;

const serviceSortOptions = ['РџРѕ С†РµРЅРµ', 'РџРѕ СЂРµР№С‚РёРЅРіСѓ', 'РќРѕРІС‹Рµ Р°РЅРєРµС‚С‹'];

function getSpecialistDetailId(id: string) {
  return id;
}

function getDefaultView(initialCategoryId?: string, initialCategoryTitle?: string): BaseServicesView {
  return initialCategoryId === 'coaches' || initialCategoryTitle === 'РљРѕСѓС‡Рё' ? 'coaches' : 'services';
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
  const [returnToFilter, setReturnToFilter] = useState(false);
  const [selectedSort, setSelectedSort] = useState(serviceSortOptions[0]);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    ...defaultProductFilters,
    topics: initialTopicId ? [initialTopicId] : [],
  });
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const categoryWidth = Math.min((width - 16 * 2 - 8 * 2) / 3, 118);
  const specialistCardWidth = (width - 16 * 2 - 10) / 2;

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
  }, [initialCategoryId, initialCategoryTitle]);

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

  if (currentView === 'coaches') {
    return (
      <CoachesScreen
        selectedSort={selectedSort}
        selectedFilters={selectedFilters}
        isSortOpen={isSortOpen}
        isFilterOpen={isFilterOpen}
        onOpenServicesHelp={() => onOpenServices('РљРѕСѓС‡Рё')}
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
              <Text style={styles.title}>РЈСЃР»СѓРіРё</Text>
            </View>
          </View>

          <ServicesHelpBanner onPress={() => console.log('pick specialist')} />

          <ServiceCategoryGrid
            categories={serviceCategories}
            categoryWidth={categoryWidth}
            onPressCategory={(id) => {
              if (id === 'coaches') {
                setPreviousView('coaches');
                setCurrentView('coaches');
                return;
              }

              console.log('service category', id);
            }}
          />

          <TopSpecialistsSection
            specialists={topSpecialists}
            onPressSpecialist={(id) => onOpenSpecialistDetails(getSpecialistDetailId(id))}
          />

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
