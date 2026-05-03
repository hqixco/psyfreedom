import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { favoriteChips } from '../../data/favoritesData';

type FavoriteChipId = (typeof favoriteChips)[number]['id'];

type FavoritesChipsProps = {
  activeCategory: FavoriteChipId;
  onSelect: (category: FavoriteChipId) => void;
};

export function FavoritesChips({ activeCategory, onSelect }: FavoritesChipsProps) {
  return (
    <View style={styles.scroll}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginTop: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  chip: {
    height: 43,
    borderRadius: 22,
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  chipActive: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  chipInactive: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  chipText: {
    fontSize: 16,
    lineHeight: 18,
    ...typography.Inter[600],
  },
  chipTextActive: {
    color: colors.white,
  },
  chipTextInactive: {
    color: colors.primaryDark,
  },
});
