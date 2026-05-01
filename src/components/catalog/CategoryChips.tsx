import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type CategoryChipsProps = {
  items: string[];
  activeItem?: string;
  onPressItem?: (item: string) => void;
  scrollable?: boolean;
};

export function CategoryChips({ items, activeItem, onPressItem, scrollable = false }: CategoryChipsProps) {
  const content = (
    <View style={scrollable ? styles.scrollRow : styles.wrapRow}>
      {items.map((item) => {
        const active = item === activeItem;

        return (
          <Pressable key={item} style={[styles.chip, active ? styles.activeChip : null]} onPress={() => onPressItem?.(item)}>
            <Text style={[styles.chipText, active ? styles.activeChipText : null]}>{item}</Text>
          </Pressable>
        );
      })}
    </View>
  );

  if (scrollable) {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {content}
      </ScrollView>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
  },
  scrollRow: {
    flexDirection: 'row',
  },
  wrapRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 16,
  },
  chip: {
    height: 36,
    borderRadius: 18,
    paddingHorizontal: 14,
    backgroundColor: colors.cardLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  activeChip: {
    backgroundColor: colors.primary,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  activeChipText: {
    color: colors.white,
  },
});
