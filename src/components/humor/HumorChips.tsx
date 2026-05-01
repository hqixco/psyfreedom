import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/theme';
import { HumorFilterType } from '../../data/humorData';

type HumorChipsProps = {
  chips: { id: HumorFilterType; title: string }[];
  activeType: HumorFilterType;
  onSelect: (type: HumorFilterType) => void;
};

export function HumorChips({ chips, activeType, onSelect }: HumorChipsProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
      {chips.map((chip) => {
        const active = chip.id === activeType;
        return (
          <Pressable
            key={chip.id}
            style={[styles.chip, active ? styles.activeChip : styles.inactiveChip]}
            onPress={() => onSelect(chip.id)}
          >
            <Text style={[styles.text, active ? styles.activeText : styles.inactiveText]}>{chip.title}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    fontWeight: '700',
  },
  activeText: {
    color: colors.white,
  },
  inactiveText: {
    color: colors.primaryDark,
  },
});

