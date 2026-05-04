import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';
import { FilterConfig, SelectedFilters } from '../../data/filterData';
import { FilterSection } from './FilterSection';

type UniversalFilterSheetProps = {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: SelectedFilters) => void;
  onReset: () => void;
  config: FilterConfig;
  selectedFilters: SelectedFilters;
  onChangeFilters: (filters: SelectedFilters) => void;
  onOpenLocation?: () => void;
};

export function UniversalFilterSheet({
  visible,
  onClose,
  onApply,
  onReset,
  config,
  selectedFilters,
  onChangeFilters,
  onOpenLocation,
}: UniversalFilterSheetProps) {
  const insets = useSafeAreaInsets();

  if (!visible) {
    return null;
  }

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      presentationStyle="overFullScreen"
      statusBarTranslucent
      navigationBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 18 + insets.bottom, maxHeight: '88%' }]}>
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>{config.title}</Text>
            <Pressable style={styles.closeButton} onPress={onClose} hitSlop={12}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
            {config.sections.map((section) => (
              <FilterSection
                key={section.id}
                section={section}
                selectedFilters={selectedFilters}
                onChangeFilters={onChangeFilters}
                onOpenLocation={onOpenLocation}
              />
            ))}
          </ScrollView>

          <View style={styles.footer}>
            <Pressable style={styles.applyButton} onPress={() => onApply(selectedFilters)}>
              <Text style={styles.applyButtonText}>Применить</Text>
            </Pressable>
            <Pressable style={styles.resetButton} onPress={onReset}>
              <Text style={styles.resetButtonText}>Сбросить фильтры</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingTop: 22,
    paddingHorizontal: 22,
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  sheetTitle: {
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingBottom: 8,
  },
  footer: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: colors.white,
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
    height: 43,
    marginTop: 8,
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
