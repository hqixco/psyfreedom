import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { WorkScheduleSettingsSheet } from '../../components/working-sessions/WorkScheduleSettingsSheet';
import { WorkingSessionDetailsSheet } from '../../components/working-sessions/WorkingSessionDetailsSheet';
import { WorkingSessionList } from '../../components/working-sessions/WorkingSessionList';
import { WorkingSessionsCalendar } from '../../components/working-sessions/WorkingSessionsCalendar';
import { WorkingSessionsHeader } from '../../components/working-sessions/WorkingSessionsHeader';
import { colors } from '../../constants/theme';
import {
  WorkDaySchedule,
  workingCalendarMock,
  WorkingSessionItem,
  workingScheduleMock,
  workingSessionsMock,
} from '../../data/workingSessionsData';

export function WorkingSessionsCalendarScreen({
  onBack,
}: {
  onBack: () => void;
}) {
  const insets = useSafeAreaInsets();
  const [selectedDate, setSelectedDate] = useState(workingCalendarMock.selectedDate);
  const [schedule, setSchedule] = useState<WorkDaySchedule[]>(workingScheduleMock);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<WorkingSessionItem | null>(null);

  const visibleSessions = useMemo<WorkingSessionItem[]>(() => {
    const filtered = workingSessionsMock.filter(
      (item) => item.date === selectedDate || item.dateLabel === 'Сегодня'
    );
    return filtered.length > 0 ? filtered : workingSessionsMock;
  }, [selectedDate]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}
        >
          <WorkingSessionsHeader onBack={onBack} onOpenSettings={() => setIsSettingsOpen(true)} />
          <WorkingSessionsCalendar
            monthTitle={workingCalendarMock.monthTitle}
            year={workingCalendarMock.year}
            selectedDate={selectedDate}
            markedDates={workingCalendarMock.markedDates}
            onSelectDate={setSelectedDate}
          />
          <WorkingSessionList
            sessions={visibleSessions}
            onOpenSession={(item) => setSelectedSession(item)}
          />
        </ScrollView>

        <WorkScheduleSettingsSheet
          visible={isSettingsOpen}
          schedule={schedule}
          onClose={() => setIsSettingsOpen(false)}
          onChangeSchedule={setSchedule}
          onSave={() => {
            console.log('work schedule saved', schedule);
            setIsSettingsOpen(false);
          }}
        />

        <WorkingSessionDetailsSheet
          visible={Boolean(selectedSession)}
          session={selectedSession}
          onClose={() => setSelectedSession(null)}
          onOpenChat={() => {
            console.log('open working session chat', selectedSession?.id);
            setSelectedSession(null);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
