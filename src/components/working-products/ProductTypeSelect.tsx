import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { productTypeOptions, WorkingProductFormValues } from '../../data/workingProductsData';

export function ProductTypeSelect({
  value,
  open,
  onToggleOpen,
  onSelect,
}: {
  value: WorkingProductFormValues['productType'];
  open: boolean;
  onToggleOpen: () => void;
  onSelect: (value: WorkingProductFormValues['productType']) => void;
}) {
  const selectedLabel = productTypeOptions.find((item) => item.id === value)?.title ?? 'Выбрать';

  return (
    <View>
      <Text style={styles.label}>Вид товара</Text>
      <Pressable style={styles.select} onPress={onToggleOpen}>
        <Text style={[styles.valueText, !value ? styles.placeholderText : null]}>{selectedLabel}</Text>
        <Ionicons name="chevron-down" size={20} color="#8A8A8A" />
      </Pressable>

      {open ? (
        <View style={styles.dropdown}>
          {productTypeOptions.map((item) => (
            <Pressable
              key={item.id}
              style={styles.option}
              onPress={() => {
                onSelect(item.id);
                onToggleOpen();
              }}
            >
              <Text style={styles.optionText}>{item.title}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '400',
    color: colors.primaryDark,
    marginBottom: 8,
  },
  select: {
    height: 41,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  valueText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
  },
  placeholderText: {
    color: '#8A8A8A',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  option: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
  },
});
