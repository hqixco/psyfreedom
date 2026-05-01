import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { CancelSessionSheet } from '../../components/profile-sessions/CancelSessionSheet';
import { EmptySessionsState } from '../../components/profile-sessions/EmptySessionsState';
import { MySessionsHeader } from '../../components/profile-sessions/MySessionsHeader';
import { SessionDeletedToast } from '../../components/profile-sessions/SessionDeletedToast';
import { SessionDetailsSheet } from '../../components/profile-sessions/SessionDetailsSheet';
import { SessionList } from '../../components/profile-sessions/SessionList';
import { SessionsCalendar } from '../../components/profile-sessions/SessionsCalendar';
import { colors } from '../../constants/theme';
import { calendarMonthMock, SessionItem, sessionsMock } from '../../data/mySessionsData';

export function MySessionsScreen({
  onBack,
  onOpenServices,
  onOpenChat,
}: {
  onBack: () => void;
  onOpenServices: () => void;
  onOpenChat: () => void;
}) {
  const insets = useSafeAreaInsets();
  const [selectedDate, setSelectedDate] = useState(calendarMonthMock.selectedDate);
  const [sessions, setSessions] = useState<SessionItem[]>(sessionsMock);
  const [selectedSession, setSelectedSession] = useState<SessionItem | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState('Передумал идти к этому специалисту');
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (!toastVisible) {
      return undefined;
    }
    const timer = setTimeout(() => setToastVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [toastVisible]);

  const visibleSessions = useMemo(() => {
    const filtered = sessions.filter((item) => item.date === selectedDate || item.dateLabel === 'Сегодня');
    return filtered.length > 0 ? filtered : sessions;
  }, [selectedDate, sessions]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <SessionDeletedToast visible={toastVisible} top={insets.top + 8} onClose={() => setToastVisible(false)} />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
          <MySessionsHeader onBack={onBack} />
          {sessions.length === 0 ? (
            <EmptySessionsState onBookSession={onOpenServices} />
          ) : (
            <>
              <SessionsCalendar selectedDate={selectedDate} markedDates={calendarMonthMock.markedDates} onSelectDate={setSelectedDate} />
              <SessionList
                sessions={visibleSessions}
                onOpenSession={(item) => {
                  setSelectedSession(item);
                  setIsDetailsOpen(true);
                }}
              />
            </>
          )}
        </ScrollView>
      </View>

      <SessionDetailsSheet
        visible={isDetailsOpen}
        session={selectedSession}
        onClose={() => setIsDetailsOpen(false)}
        onCancel={() => {
          setIsDetailsOpen(false);
          setIsCancelOpen(true);
        }}
        onOpenChat={() => {
          setIsDetailsOpen(false);
          onOpenChat();
        }}
      />

      <CancelSessionSheet
        visible={isCancelOpen}
        reason={cancelReason}
        onSelectReason={setCancelReason}
        onClose={() => setIsCancelOpen(false)}
        onConfirm={() => {
          if (selectedSession) {
            setSessions((prev) => prev.filter((item) => item.id !== selectedSession.id));
          }
          setSelectedSession(null);
          setIsCancelOpen(false);
          setToastVisible(true);
        }}
      />
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
