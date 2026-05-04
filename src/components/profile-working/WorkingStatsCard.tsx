import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { workingProfileStats } from '../../data/workingProfileData';
import { WorkingProfileMenuItem } from './WorkingProfileMenuItem';

export function WorkingStatsCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Статистика</Text>
      {workingProfileStats.map((item) => (
        <WorkingProfileMenuItem
          key={item.id}
          title={item.title}
          itemStyle={styles.item}
          textStyle={styles.itemText}
          onPress={() => console.log('working stats', item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 0,
    backgroundColor: colors.cardLight,
    borderRadius: 16,
    padding: 18,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
    marginBottom: 16,
  },
  item: {
    height: 48,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    marginBottom: 4,
  },
  itemText: {
    fontSize: 14,
  },
});
