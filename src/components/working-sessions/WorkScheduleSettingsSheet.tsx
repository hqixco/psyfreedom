import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constants/theme';
import { WorkDaySchedule } from '../../data/workingSessionsData';
import { WorkDayScheduleItem } from './WorkDayScheduleItem';

type ActiveTimeField = {
  dayId: string;
  rangeId: string;
  field: 'start' | 'end';
} | null;

const TIME_OPTIONS = [
  '8:00',
  '8:30',
  '9:00',
  '9:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
] as const;

export function WorkScheduleSettingsSheet({
  visible,
  schedule,
  onClose,
  onChangeSchedule,
  onSave,
}: {
  visible: boolean;
  schedule: WorkDaySchedule[];
  onClose: () => void;
  onChangeSchedule: (next: WorkDaySchedule[]) => void;
  onSave: () => void;
}) {
  const insets = useSafeAreaInsets();
  const [activeTimeField, setActiveTimeField] = useState<ActiveTimeField>(null);

  const updateDay = (dayId: string, updater: (item: WorkDaySchedule) => WorkDaySchedule) => {
    onChangeSchedule(schedule.map((item) => (item.id === dayId ? updater(item) : item)));
  };

  const updateTime = (time: string) => {
    if (!activeTimeField) {
      return;
    }

    updateDay(activeTimeField.dayId, (day) => ({
      ...day,
      ranges: day.ranges.map((range) =>
        range.id === activeTimeField.rangeId
          ? {
              ...range,
              [activeTimeField.field]: time,
            }
          : range
      ),
    }));
    setActiveTimeField(null);
  };

  return (
    <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 20 + insets.bottom }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Вы можете установить дату и{'\n'}время работы на платформе</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.primaryDark} />
            </Pressable>
          </View>

          {schedule.map((item) => (
            <WorkDayScheduleItem
              key={item.id}
              item={item}
              onToggleEnabled={() =>
                updateDay(item.id, (day) => ({ ...day, enabled: !day.enabled }))
              }
              onToggleExpanded={() =>
                updateDay(item.id, (day) => ({ ...day, expanded: !day.expanded }))
              }
              onDeleteRange={(rangeId) =>
                updateDay(item.id, (day) => ({
                  ...day,
                  ranges: day.ranges.filter((range) => range.id !== rangeId),
                }))
              }
              onAddRange={() =>
                updateDay(item.id, (day) => ({
                  ...day,
                  enabled: true,
                  expanded: true,
                  ranges: [
                    ...day.ranges,
                    { id: `${day.id}-${Date.now()}`, start: '9:00', end: '13:30' },
                  ],
                }))
              }
              onPressStart={(rangeId) => setActiveTimeField({ dayId: item.id, rangeId, field: 'start' })}
              onPressEnd={(rangeId) => setActiveTimeField({ dayId: item.id, rangeId, field: 'end' })}
            />
          ))}

          <Pressable style={styles.saveButton} onPress={onSave}>
            <Text style={styles.saveButtonText}>Сохранить изменения</Text>
          </Pressable>
        </View>
      </View>

      <Modal transparent animationType="fade" visible={Boolean(activeTimeField)} onRequestClose={() => setActiveTimeField(null)}>
        <View style={styles.timeOverlay}>
          <Pressable style={StyleSheet.absoluteFill} onPress={() => setActiveTimeField(null)} />
          <View style={styles.timeSheet}>
            <View style={styles.timeHeader}>
              <Text style={styles.timeTitle}>Выберите время</Text>
              <Pressable onPress={() => setActiveTimeField(null)}>
                <Ionicons name="close" size={24} color={colors.primaryDark} />
              </Pressable>
            </View>
            <View style={styles.timeGrid}>
              {TIME_OPTIONS.map((time) => (
                <Pressable key={time} style={styles.timeOption} onPress={() => updateTime(time)}>
                  <Text style={styles.timeOptionText}>{time}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 22,
    maxHeight: '86%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 22,
  },
  title: {
    flex: 1,
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  saveButton: {
    marginTop: 14,
    height: 41,
    borderRadius: 360,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 14,
    ...typography.Inter[600],
  },
  timeOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },
  timeSheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 20,
    maxHeight: '55%',
  },
  timeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  timeTitle: {
    fontSize: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeOption: {
    width: '30%',
    height: 41,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  timeOptionText: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
});
