import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type FilterSection = {
  title: string;
  options: string[];
};

type FilterModalProps = {
  visible: boolean;
  sections: FilterSection[];
  selectedItems: string[];
  onToggleItem: (item: string) => void;
  onApply: () => void;
  onReset: () => void;
  onClose: () => void;
};

export function FilterModal({
  visible,
  sections,
  selectedItems,
  onToggleItem,
  onApply,
  onReset,
  onClose,
}: FilterModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={styles.modalContent}>
          <Text style={styles.title}>Фильтры</Text>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            {sections.map((section) => (
              <View key={section.title} style={styles.section}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <View style={styles.chipsRow}>
                  {section.options.map((option) => {
                    const active = selectedItems.includes(option);

                    return (
                      <Pressable key={option} style={[styles.chip, active ? styles.activeChip : null]} onPress={() => onToggleItem(option)}>
                        <Text style={[styles.chipText, active ? styles.activeChipText : null]}>{option}</Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            ))}
          </ScrollView>
          <Pressable style={styles.applyButton} onPress={onApply}>
            <Text style={styles.applyButtonText}>Применить</Text>
          </Pressable>
          <Pressable style={styles.resetButton} onPress={onReset}>
            <Text style={styles.resetButtonText}>Сбросить фильтры</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  modalContent: {
    height: '80%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 24,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  scrollContent: {
    paddingTop: 16,
    paddingBottom: 18,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    marginBottom: 12,
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    minHeight: 36,
    borderRadius: 18,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: colors.cardLight,
  },
  activeChip: {
    backgroundColor: colors.primary,
  },
  chipText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  activeChipText: {
    color: colors.white,
  },
  applyButton: {
    height: 43,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  applyButtonText: {
    fontSize: 16,
    ...typography.Inter[600],
    color: colors.white,
  },
  resetButton: {
    marginTop: 12,
    height: 43,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#05728F',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  resetButtonText: {
    fontSize: 16,
    ...typography.Inter[600],
    color: '#033542',
  },
});
