import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

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
    marginTop: 40,
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  list: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  item: {
    minHeight: 54,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    lineHeight: 21,
    color: colors.primaryDark,
    fontWeight: '500',
  },
});
