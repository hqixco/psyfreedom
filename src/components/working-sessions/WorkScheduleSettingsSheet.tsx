import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/theme';
import { WorkDaySchedule } from '../../data/workingSessionsData';
import { WorkDayScheduleItem } from './WorkDayScheduleItem';

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

  const updateDay = (dayId: string, updater: (item: WorkDaySchedule) => WorkDaySchedule) => {
    onChangeSchedule(schedule.map((item) => (item.id === dayId ? updater(item) : item)));
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
            />
          ))}

          <Pressable style={styles.saveButton} onPress={onSave}>
            <Text style={styles.saveButtonText}>Сохранить изменения</Text>
          </Pressable>
        </View>
      </View>
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
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  saveButton: {
    marginTop: 14,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
