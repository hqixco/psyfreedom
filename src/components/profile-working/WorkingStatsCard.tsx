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
          onPress={() => console.log('working stats', item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 18,
    backgroundColor: colors.cardLight,
    borderRadius: 16,
    padding: 18,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    ...typography.Inter[700],
    color: colors.primaryDark,
    marginBottom: 16,
  },
});
