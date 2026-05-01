import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants/theme';

type ProductSortModalProps = {
  visible: boolean;
  selectedSort: string;
  options: string[];
  onClose: () => void;
  onSelect: (option: string) => void;
};

export function ProductSortModal({ visible, selectedSort, options, onClose, onSelect }: ProductSortModalProps) {
  const insets = useSafeAreaInsets();

  return (
    <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 28 + insets.bottom }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Сортировка</Text>
            <Pressable style={styles.closeButton} onPress={onClose} hitSlop={8}>
              <CloseIcon />
            </Pressable>
          </View>

          {options.map((option) => {
            const active = option === selectedSort;

            return (
              <Pressable key={option} style={styles.row} onPress={() => onSelect(option)}>
                <RadioIndicator active={active} />
                <Text style={[styles.rowText, active ? styles.activeText : null]}>{option}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </Modal>
  );
}

function CloseIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path d="M17.25 17.25L6.75 6.75" stroke="#033542" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M17.25 6.75L6.75 17.25" stroke="#033542" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function RadioIndicator({ active }: { active: boolean }) {
  return (
    <View style={[styles.radioOuter, active ? styles.radioOuterActive : styles.radioOuterInactive]}>
      {active ? <View style={styles.radioInner} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  sheet: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 24,
    paddingTop: 22,
    backgroundColor: colors.white,
  },
  header: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  closeButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: {
    backgroundColor: 'rgba(5, 114, 143, 1)',
  },
  radioOuterInactive: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(193, 212, 217, 1)',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6.5,
    backgroundColor: '#fff',
  },
  rowText: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  activeText: {
    fontWeight: '700',
    color: colors.primary,
  },
});
