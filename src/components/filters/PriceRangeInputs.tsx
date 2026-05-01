import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type PriceRangeInputsProps = {
  minValue?: string;
  maxValue?: string;
  minPlaceholder: string;
  maxPlaceholder: string;
};

export function PriceRangeInputs({
  minValue,
  maxValue,
  minPlaceholder,
  maxPlaceholder,
}: PriceRangeInputsProps) {
  return (
    <View style={styles.priceRow}>
      <View style={styles.priceInput}>
        <Text style={styles.priceText}>{minValue || minPlaceholder}</Text>
      </View>
      <View style={styles.priceInput}>
        <Text style={styles.priceText}>{maxValue || maxPlaceholder}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  priceInput: {
    width: '48.5%',
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 14,
    justifyContent: 'center',
    backgroundColor: colors.cardLight,
  },
  priceText: {
    fontSize: 14,
    color: colors.primaryDark,
  },
});
