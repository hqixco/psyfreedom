import { ScrollView, Pressable, StyleSheet, Text } from 'react-native';
import { CatalogTabItem } from '../../data/catalogData';
import { colors, typography } from '../../constants/theme';

type CatalogTabsProps = {
  items: CatalogTabItem[];
  activeId: string;
  onChange: (id: string) => void;
};

export function CatalogTabs({ items, activeId, onChange }: CatalogTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabsScroll}
      style={styles.container}
    >
      {items.map((item, index) => {
        const active = item.id === activeId;

        return (
          <Pressable
            key={item.id}
            style={[styles.chip, active ? styles.activeChip : styles.inactiveChip, index < items.length - 1 ? styles.chipGap : null]}
            onPress={() => onChange(item.id)}
          >
            <Text style={[styles.chipText, active ? styles.activeChipText : styles.inactiveChipText]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  tabsScroll: {
    paddingHorizontal: 16,
  },
  chip: {
    height: 42,
    paddingHorizontal: 20,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipGap: {
    marginRight: 8,
  },
  activeChip: {
    backgroundColor: colors.primary,
  },
  inactiveChip: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  chipText: {
    fontSize: 16,
    ...typography.Inter[600],
    lineHeight: 22,
  },
  activeChipText: {
    color: colors.white,
  },
  inactiveChipText: {
    color: colors.primaryDark,
  },
});
