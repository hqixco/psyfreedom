import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { purchaseChips } from '../../data/myPurchasesData';

type PurchaseChipId = (typeof purchaseChips)[number]['id'];

export function PurchaseChips({
  activeCategory,
  onSelectCategory,
}: {
  activeCategory: PurchaseChipId;
  onSelectCategory: (category: PurchaseChipId) => void;
}) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
      {purchaseChips.map((chip) => {
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
    paddingBottom: 18,
  },
  chip: {
    height: 44,
    borderRadius: 22,
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
    fontSize: 17,
    ...typography.Inter[700],
  },
  activeText: {
    color: colors.white,
  },
  inactiveText: {
    color: colors.primaryDark,
  },
});
