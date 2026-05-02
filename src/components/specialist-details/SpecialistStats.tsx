import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { SpecialistDetails } from '../../data/specialistDetailsData';

type SpecialistStatsProps = {
  stats: SpecialistDetails['stats'];
};

export function SpecialistStats({ stats }: SpecialistStatsProps) {
  const items = [
    { value: stats.products, label: 'Товаров' },
    { value: stats.materials, label: 'Материалов' },
    { value: stats.sessions, label: 'Сессий' },
  ];

  return (
    <View style={styles.row}>
      {items.map((item) => (
        <View key={item.label} style={styles.card}>
          <Text style={styles.value}>{item.value}</Text>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 16,
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '31.5%',
    height: 72,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cardLight,
  },
  value: {
    fontSize: 26,
    ...typography.Inter[700],
    color: colors.primary,
  },
  label: {
    marginTop: 2,
    fontSize: 13,
    color: colors.primaryDark,
  },
});
