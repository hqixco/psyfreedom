import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { WorkDaySchedule } from '../../data/workingSessionsData';
import { WorkTimeRangeRow } from './WorkTimeRangeRow';

export function WorkDayScheduleItem({
  item,
  onToggleEnabled,
  onToggleExpanded,
  onDeleteRange,
  onAddRange,
}: {
  item: WorkDaySchedule;
  onToggleEnabled: () => void;
  onToggleExpanded: () => void;
  onDeleteRange: (rangeId: string) => void;
  onAddRange: () => void;
}) {
  const summary = item.ranges.map((range) => `${range.start} — ${range.end}`).join('     ');

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Pressable style={styles.dayInfo} onPress={onToggleExpanded}>
          <Switch
            value={item.enabled}
            onValueChange={onToggleEnabled}
            trackColor={{ false: '#B0B0B0', true: '#B7DCE2' }}
            thumbColor={item.enabled ? colors.primary : colors.white}
          />
          <Text style={styles.dayTitle}>{item.title}</Text>
        </Pressable>
        <Pressable onPress={onToggleExpanded}>
          <Ionicons
            name={item.expanded ? 'chevron-up' : 'chevron-down'}
            size={22}
            color={colors.primaryDark}
          />
        </Pressable>
      </View>

      {item.enabled && item.expanded ? (
        <View>
          {item.ranges.map((range) => (
            <WorkTimeRangeRow
              key={range.id}
              range={range}
              onDelete={() => onDeleteRange(range.id)}
            />
          ))}
          <Pressable onPress={onAddRange}>
            <Text style={styles.addTime}>+ Добавить время</Text>
          </Pressable>
        </View>
      ) : (
        <Text style={[styles.summary, !item.enabled ? styles.summaryDisabled : null]}>{summary}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardLight,
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dayInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primaryDark,
    marginLeft: 10,
  },
  summary: {
    marginLeft: 46,
    marginTop: 8,
    fontSize: 15,
    color: '#B0B0B0',
  },
  summaryDisabled: {
    color: '#B0B0B0',
  },
  addTime: {
    marginTop: 14,
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
});
