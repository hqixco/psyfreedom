import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { profileAppointments } from '../../data/authorizedProfileData';

export function ProfileCalendarCard({ onOpenSessions }: { onOpenSessions: () => void }) {
  return (
    <Pressable style={styles.card} onPress={onOpenSessions}>
      <Text style={styles.title}>Календарь записи</Text>

      <View style={styles.headerRow}>
        <Text style={styles.label}>Ближайшая запись</Text>
        <Text style={styles.date}>12 июня</Text>
      </View>

      <View style={styles.appointments}>
        {profileAppointments.map((item) => (
          <View key={item.id} style={styles.appointmentCard}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.appointmentTitle}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.primaryDark} />
          </View>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardLight,
    borderRadius: 14,
    padding: 20,
    marginTop: 8,
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    color: colors.primaryDark,
  },
  date: {
    fontSize: 14,
    ...typography.Inter[500],
    color: colors.primaryDark,
  },
  appointments: {
    marginTop: 14,
    gap: 8,
  },
  appointmentCard: {
    height: 41,
    borderRadius: 12,
    backgroundColor: colors.white,
    paddingHorizontal: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    color: colors.primary,
    ...typography.Inter[500],
    fontSize: 14,
    width: 49,
  },
  appointmentTitle: {
    flex: 1,
    color: colors.primaryDark,
    marginHorizontal: 0,
  },
});
