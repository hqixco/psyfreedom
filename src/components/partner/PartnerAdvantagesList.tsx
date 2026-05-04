import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function PartnerAdvantagesList({ advantages }: { advantages: string[] }) {
  return (
    <View>
      <Text style={styles.heading}>Наши преимущества</Text>
      <View style={styles.list}>
        {advantages.map((item) => (
          <View key={item} style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: 16,
    marginTop: 33,
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  list: {
    marginHorizontal: 16,
    marginTop: 18,
  },
  item: {
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.primaryDark,
    ...typography.Inter[400],
  },
});
