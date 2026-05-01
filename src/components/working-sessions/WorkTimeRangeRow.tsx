import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { WorkTimeRange } from '../../data/workingSessionsData';

function TimeSelect({
  value,
  onPress,
}: {
  value: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.timeSelect} onPress={onPress}>
      <Text style={styles.timeText}>{value}</Text>
      <Ionicons name="chevron-down" size={18} color="#B0B0B0" />
    </Pressable>
  );
}

export function WorkTimeRangeRow({
  range,
  onDelete,
}: {
  range: WorkTimeRange;
  onDelete: () => void;
}) {
  return (
    <View style={styles.row}>
      <TimeSelect value={range.start} onPress={() => console.log('select time start', range.id)} />
      <TimeSelect value={range.end} onPress={() => console.log('select time end', range.id)} />
      <Pressable style={styles.deleteButton} onPress={onDelete}>
        <Ionicons name="trash-outline" size={24} color="#B0B0B0" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
  },
  timeSelect: {
    flex: 1,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  deleteButton: {
    width: 32,
    alignItems: 'center',
  },
});
