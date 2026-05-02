import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import {
  CheckboxSectionConfig,
  FilterSectionConfig,
  PriceRangeSectionConfig,
  SelectedFilters,
} from '../../data/filterData';
import { russianCities } from '../../data/russianCities';
import { FilterCheckbox } from './FilterCheckbox';
import { FilterChip } from './FilterChip';
import { PriceRangeInputs } from './PriceRangeInputs';

type FilterSectionProps = {
  section: FilterSectionConfig;
  selectedFilters: SelectedFilters;
  onChangeFilters: (filters: SelectedFilters) => void;
  onOpenLocation?: () => void;
};

const COLLAPSED_OPTIONS_COUNT = 4;

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [locationQuery, setLocationQuery] = useState(selectedFilters.location ?? '');

  if (section.type === 'checkbox') {
    const checkboxSection = section as CheckboxSectionConfig;
    const selectedValues = getCheckboxValues(selectedFilters, checkboxSection.id);
    const canExpand = Boolean(
      checkboxSection.showAllLabel && checkboxSection.options.length > COLLAPSED_OPTIONS_COUNT
    );
    const visibleOptions = canExpand && !isExpanded
      ? checkboxSection.options.slice(0, COLLAPSED_OPTIONS_COUNT)
      : checkboxSection.options;

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{checkboxSection.title}</Text>
        {visibleOptions.map((option) => (
          <FilterCheckbox
            key={option.id}
            label={option.title}
            checked={selectedValues.includes(option.id)}
            variant={checkboxSection.id === 'format' ? 'radio' : 'square'}
            onPress={() => onChangeFilters(updateCheckboxValues(selectedFilters, checkboxSection.id, option.id))}
          />
        ))}
        {canExpand && !isExpanded ? (
          <FilterChip label={checkboxSection.showAllLabel!} onPress={() => setIsExpanded(true)} />
        ) : null}
      </View>
    );
  }

  if (section.type === 'location') {
    const normalizedQuery = locationQuery.trim().toLowerCase();
    const filteredCities = normalizedQuery.length === 0
      ? russianCities
      : russianCities.filter((city) => city.toLowerCase().includes(normalizedQuery));

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <View>
          <Pressable
            style={styles.locationField}
            onPress={() => setIsLocationOpen((prev) => !prev)}
            hitSlop={8}
          >
            <Text style={[styles.locationText, !selectedFilters.location && styles.locationPlaceholder]}>
              {selectedFilters.location || section.placeholder}
            </Text>
            <Ionicons
              name={isLocationOpen ? 'chevron-up' : 'chevron-down'}
              size={16}
              color={colors.muted}
            />
          </Pressable>

          {isLocationOpen ? (
            <View style={styles.locationDropdown}>
              <TextInput
                value={locationQuery}
                onChangeText={setLocationQuery}
                placeholder="Введите город"
                placeholderTextColor={colors.muted}
                style={styles.locationSearchInput}
                autoFocus
              />
              <ScrollView style={styles.locationList} nestedScrollEnabled keyboardShouldPersistTaps="handled">
                {filteredCities.map((city) => (
                  <Pressable
                    key={city}
                    style={styles.locationOption}
                    onPress={() => {
                      setLocationQuery(city);
                      setIsLocationOpen(false);
                      onChangeFilters({
                        ...selectedFilters,
                        location: city,
                      });
                    }}
                  >
                    <Text style={styles.locationOptionText}>{city}</Text>
                  </Pressable>
                ))}
                {filteredCities.length === 0 ? (
                  <Text style={styles.locationEmptyText}>Город не найден</Text>
                ) : null}
              </ScrollView>
            </View>
          ) : null}
        </View>
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
          variant="radio"
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
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  locationField: {
    height: 41,
    borderRadius: 360,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#DCEBED',
  },
  locationText: {
    fontSize: 14,
    color: colors.primaryDark,
  },
  locationPlaceholder: {
    color: colors.muted,
  },
  locationDropdown: {
    marginTop: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#DCEBED',
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  locationSearchInput: {
    height: 41,
    paddingHorizontal: 14,
    fontSize: 14,
    color: colors.primaryDark,
    backgroundColor: colors.white,
  },
  locationList: {
    maxHeight: 220,
    borderTopWidth: 1,
    borderTopColor: '#EEF5F6',
  },
  locationOption: {
    minHeight: 40,
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  locationOptionText: {
    fontSize: 14,
    color: colors.primaryDark,
  },
  locationEmptyText: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 13,
    color: colors.muted,
  },
  priceCheckboxWrap: {
    marginTop: 8,
  },
});
