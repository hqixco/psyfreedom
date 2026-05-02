import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { favoriteChips } from '../../data/favoritesData';

type FavoriteChipId = (typeof favoriteChips)[number]['id'];

type FavoritesChipsProps = {
  activeCategory: FavoriteChipId;
  onSelect: (category: FavoriteChipId) => void;
};

export function FavoritesChips({ activeCategory, onSelect }: FavoritesChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.scroll}
    >
      {favoriteChips.map((chip) => {
        const isActive = chip.id === activeCategory;

        return (
          <Pressable
            key={chip.id}
            style={[styles.chip, isActive ? styles.chipActive : styles.chipInactive]}
            onPress={() => onSelect(chip.id)}
          >
            <Text style={[styles.chipText, isActive ? styles.chipTextActive : styles.chipTextInactive]}>
              {chip.title}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginTop: 24,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  chip: {
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: colors.primary,
  },
  chipInactive: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  chipText: {
    fontSize: 17,
    ...typography.Inter[700],
  },
  chipTextActive: {
    color: colors.white,
  },
  chipTextInactive: {
    color: colors.primaryDark,
  },
});
