import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { PurchaseCategory } from '../../data/myPurchasesData';

type PurchaseChipId = 'all' | PurchaseCategory;

type PurchaseChip = {
  id: PurchaseChipId;
  title: string;
};

export function PurchaseChips({
  chips,
  activeCategory,
  onSelectCategory,
}: {
  activeCategory: PurchaseChipId;
  onSelectCategory: (category: PurchaseChipId) => void;
  chips: PurchaseChip[];
}) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
      {chips.map((chip) => {
        const isActive = chip.id === activeCategory;
        return (
          <Pressable
            key={chip.id}
            style={[styles.chip, isActive ? styles.activeChip : styles.inactiveChip]}
            onPress={() => onSelectCategory(chip.id)}
          >
            <Text style={[styles.text, isActive ? styles.activeText : styles.inactiveText]}>
              {chip.title}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 23,
  },
  chip: {
    height: 43,
    borderRadius: 360,
    paddingHorizontal: 22,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeChip: {
    backgroundColor: colors.primary,
  },
  inactiveChip: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 16,
    ...typography.Inter[600],
  },
  activeText: {
    color: colors.white,
  },
  inactiveText: {
    color: colors.primaryDark,
  },
});
