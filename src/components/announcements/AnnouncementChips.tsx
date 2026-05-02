import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { AnnouncementCategory } from '../../data/announcementsData';

type AnnouncementChip = {
  id: AnnouncementCategory;
  title: string;
};

type AnnouncementChipsProps = {
  chips: AnnouncementChip[];
  activeCategory: AnnouncementCategory;
  onSelect: (category: AnnouncementCategory) => void;
};

export function AnnouncementChips({
  chips,
  activeCategory,
  onSelect,
}: AnnouncementChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {chips.map((chip) => {
        const active = chip.id === activeCategory;
        return (
          <Pressable
            key={chip.id}
            style={[styles.chip, active ? styles.activeChip : styles.inactiveChip]}
            onPress={() => onSelect(chip.id)}
          >
            <Text style={[styles.text, active ? styles.activeText : styles.inactiveText]}>
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
    paddingBottom: 12,
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
    ...typography.Inter[700],
  },
  activeText: {
    color: colors.white,
  },
  inactiveText: {
    color: colors.primaryDark,
  },
});

