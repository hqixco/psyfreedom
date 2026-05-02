import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type Item = { label: string; value: string };

type ProductCharacteristicsSectionProps = {
  title?: string;
  items?: Item[];
};

export function ProductCharacteristicsSection({
  title = 'Характеристики',
  items,
}: ProductCharacteristicsSectionProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      {items.map((item) => (
        <View key={item.label} style={styles.row}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
  },
  title: {
    marginHorizontal: 16,
    fontSize: 20,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  row: {
    marginHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  label: {
    width: '45%',
    fontSize: 14,
    color: colors.muted,
  },
  value: {
    width: '50%',
    fontSize: 14,
    ...typography.Inter[600],
    textAlign: 'right',
    color: colors.primaryDark,
  },
});
