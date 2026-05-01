import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import {
  CheckboxSectionConfig,
  FilterSectionConfig,
  PriceRangeSectionConfig,
  SelectedFilters,
} from '../../data/filterData';
import { FilterCheckbox } from './FilterCheckbox';
import { FilterChip } from './FilterChip';
import { PriceRangeInputs } from './PriceRangeInputs';

type FilterSectionProps = {
  section: FilterSectionConfig;
  selectedFilters: SelectedFilters;
  onChangeFilters: (filters: SelectedFilters) => void;
  onOpenLocation?: () => void;
};

function getCheckboxValues(selectedFilters: SelectedFilters, sectionId: string) {
  if (sectionId === 'productTypes') {
    return selectedFilters.productTypes;
  }

  if (sectionId === 'topics') {
    return selectedFilters.topics;
  }

  if (sectionId === 'specialistTypes') {
    return selectedFilters.specialistTypes;
  }

  if (sectionId === 'meetingType') {
    return selectedFilters.meetingType;
  }

  if (sectionId === 'sessionFormat') {
    return selectedFilters.sessionFormat;
  }

  if (sectionId === 'coachCategories') {
    return selectedFilters.coachCategories;
  }

  if (sectionId === 'materialTypes') {
    return selectedFilters.materialTypes;
  }

  if (sectionId === 'dateRanges') {
    return selectedFilters.dateRanges;
  }

  if (sectionId === 'popularity') {
    return selectedFilters.popularity;
  }

  return selectedFilters.format;
}

function updateCheckboxValues(
  selectedFilters: SelectedFilters,
  sectionId: string,
  value: string,
) {
  const current = getCheckboxValues(selectedFilters, sectionId);
  const next = current.includes(value)
    ? current.filter((item) => item !== value)
    : [...current, value];

  if (sectionId === 'productTypes') {
    return { ...selectedFilters, productTypes: next };
  }

  if (sectionId === 'topics') {
    return { ...selectedFilters, topics: next };
  }

  if (sectionId === 'specialistTypes') {
    return { ...selectedFilters, specialistTypes: next };
  }

  if (sectionId === 'meetingType') {
    return { ...selectedFilters, meetingType: next };
  }

  if (sectionId === 'sessionFormat') {
    return { ...selectedFilters, sessionFormat: next };
  }

  if (sectionId === 'coachCategories') {
    return { ...selectedFilters, coachCategories: next };
  }

  if (sectionId === 'materialTypes') {
    return { ...selectedFilters, materialTypes: next };
  }

  if (sectionId === 'dateRanges') {
    return { ...selectedFilters, dateRanges: next };
  }

  if (sectionId === 'popularity') {
    return { ...selectedFilters, popularity: next };
  }

  return { ...selectedFilters, format: next };
}

export function FilterSection({
  section,
  selectedFilters,
  onChangeFilters,
  onOpenLocation,
}: FilterSectionProps) {
  if (section.type === 'checkbox') {
    const checkboxSection = section as CheckboxSectionConfig;
    const selectedValues = getCheckboxValues(selectedFilters, checkboxSection.id);

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{checkboxSection.title}</Text>
        {checkboxSection.options.map((option) => (
          <FilterCheckbox
            key={option.id}
            label={option.title}
            checked={selectedValues.includes(option.id)}
            variant={checkboxSection.id === 'format' ? 'radio' : 'square'}
            onPress={() => onChangeFilters(updateCheckboxValues(selectedFilters, checkboxSection.id, option.id))}
          />
        ))}
        {checkboxSection.showAllLabel ? (
          <FilterChip label={checkboxSection.showAllLabel} onPress={() => console.log('show all themes')} />
        ) : null}
      </View>
    );
  }

  if (section.type === 'location') {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <Pressable style={styles.locationField} onPress={() => onOpenLocation?.()} hitSlop={8}>
          <Text style={styles.locationText}>{selectedFilters.location || section.placeholder}</Text>
          <Ionicons name="chevron-forward" size={18} color={colors.muted} />
        </Pressable>
      </View>
    );
  }

  const priceSection = section as PriceRangeSectionConfig;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{priceSection.title}</Text>
      <PriceRangeInputs
        minValue={selectedFilters.price.min}
        maxValue={selectedFilters.price.max}
        minPlaceholder={priceSection.minPlaceholder}
        maxPlaceholder={priceSection.maxPlaceholder}
      />
      <View style={styles.priceCheckboxWrap}>
        <FilterCheckbox
          label={priceSection.freeOption}
          checked={selectedFilters.price.free}
          variant="square"
          onPress={() =>
            onChangeFilters({
              ...selectedFilters,
              price: {
                ...selectedFilters.price,
                free: !selectedFilters.price.free,
              },
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 8,
    marginBottom: 8,
  },
  sectionTitle: {
    marginBottom: 5,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  locationField: {
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.cardLight,
  },
  locationText: {
    fontSize: 14,
    color: colors.primaryDark,
  },
  priceCheckboxWrap: {
    marginTop: 8,
  },
});
