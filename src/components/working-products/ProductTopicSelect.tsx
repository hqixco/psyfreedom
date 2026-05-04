import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { ProductTopicId, topicOptions } from '../../data/workingProductsData';

export function ProductTopicSelect({
  value,
  open,
  onToggleOpen,
  onToggleTopic,
}: {
  value: ProductTopicId[];
  open: boolean;
  onToggleOpen: () => void;
  onToggleTopic: (topic: ProductTopicId) => void;
}) {
  const selectedTitles = topicOptions.filter((item) => value.includes(item.id)).map((item) => item.title).join(', ');

  return (
    <View>
      <Text style={styles.label}>Темы</Text>
      <Pressable style={styles.select} onPress={onToggleOpen}>
        <Text style={[styles.valueText, value.length === 0 ? styles.placeholderText : null]} numberOfLines={1}>
          {selectedTitles || 'Выберите темы'}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#8A8A8A" />
      </Pressable>

      {open ? (
        <View style={styles.dropdown}>
          {topicOptions.map((item) => {
            const selected = value.includes(item.id);

            return (
              <Pressable key={item.id} style={styles.option} onPress={() => onToggleTopic(item.id)}>
                <View style={[styles.checkbox, selected ? styles.checkboxActive : null]}>
                  {selected ? <Ionicons name="checkmark" size={12} color={colors.white} /> : null}
                </View>
                <Text style={styles.optionText}>{item.title}</Text>
              </Pressable>
            );
          })}
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
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
    marginRight: 8,
  },
  placeholderText: {
    color: '#8A8A8A',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 16,
    paddingVertical: 6,
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#B7DCE2',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
  },
});
