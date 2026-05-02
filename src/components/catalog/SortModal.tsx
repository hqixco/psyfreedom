import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type SortModalProps = {
  visible: boolean;
  options: string[];
  selectedOption: string;
  onClose: () => void;
  onSelect: (option: string) => void;
};

export function SortModal({ visible, options, selectedOption, onClose, onSelect }: SortModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={styles.modalContent}>
          <Text style={styles.title}>Сортировка</Text>
          {options.map((option) => {
            const active = option === selectedOption;

            return (
              <Pressable key={option} style={styles.optionRow} onPress={() => onSelect(option)}>
                <Text style={[styles.optionText, active ? styles.optionTextActive : null]}>{option}</Text>
              </Pressable>
            );
          })}
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
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 24,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 22,
    ...typography.Inter[700],
    color: colors.primaryDark,
    marginBottom: 17,
  },
  optionRow: {
    paddingVertical: 7,
  },
  optionText: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  optionTextActive: {
    color: colors.primary,
    ...typography.Inter[700],
  },
});
